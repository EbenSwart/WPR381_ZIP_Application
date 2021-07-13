const decompress = require('decompress');
var AdmZip = require('adm-zip');

let procedure = "";
let SourcePath = "";
let TargetPath = "";
let toThisProcedure = 0;


const readLine = require('readline');
const { exit } = require('process');
const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question(
    "Please choose a function to do (Enter only the number): \n 1. Extract"+
    "\n 2. Compress \n Your choice: ", (answer) => {
        procedure = answer;  
        if (procedure === "1") {
            Extract();
        }else if(procedure === "2"){
            Compress();
        }else{
            Error();
        }
    });

    function Error(){
        console.log("Please select an vallid option!");
    }


    async function GetSource(){
        reader.question("Enter Source:", (sPath) => {
            SourcePath = sPath;
            GetTarget();
        })
    }

    async function GetTarget(){
        reader.question("Target:", (tPath) => {
            TargetPath = tPath;
            if (toThisProcedure  == 2) {
                Zip(SourcePath, TargetPath);
            }else if (toThisProcedure == 1){
                Unzip(SourcePath, TargetPath);
            }else{
                Error();
            }
        })
    }

    function Compress(){
        toThisProcedure = 2;
        GetSource().then();      
    }

    function Extract(){
        toThisProcedure = 1;
        GetSource().then();      
    }

    // ################ Unzip Folder ######################
    async function Unzip(Source, Target){
        (async () => {
            const files = await decompress(Source, Target);
            console.log("File was extracted");
            exit(0);
        })();
    }
     //################ Unzip Folder ######################

     //############### Zip Folder #########################
     async function Zip(Source, Target){
        var zip = new AdmZip();
        zip.addLocalFolder(Source);
        zip.writeZip(Target + ".zip");
        console.log("File was compressed");
        exit(0);
     }
     //############### Zip Folder #########################
