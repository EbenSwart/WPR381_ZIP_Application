const decompress = require('decompress');
var AdmZip = require('adm-zip');

let procedure = "";
let SourcePath = "";
let TargetPath = "";

const readLine = require('readline');
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

    function GetPaths(){
            reader.question("Enter the source path:", sPath =>{
                SourcePath = sPath;
            })
            reader.question("Enter the target path:", tPath => {
                TargetPath = tPath;
            })
    }

    function Compress(){
        async () => {
            GetPaths();
        }
        Zip(SourcePath, TargetPath);
    }

    // ################ Unzip Folder ######################
    function Unzip(Source, Target){
        (async () => {
            const files = await decompress(Source, Target);
            console.log("File was extracted");
        })();
    }
     //################ Unzip Folder ######################

     //############### Zip Folder #########################
     function Zip(Source, Target){
        var zip = new AdmZip();
        zip.addLocalFolder(Source);
        zip.writeZip(Target);
        console.log("File was compressed");
     }
     //############### Zip Folder #########################
