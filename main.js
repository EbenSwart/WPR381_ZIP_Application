//We need these two modules to zip and unzip a folder/file
const decompress = require('decompress');
var AdmZip = require('adm-zip');

//this is all the variables that are used in the program
let procedure = "";
let SourcePath = "";
let TargetPath = "";
let toThisProcedure = 0;

//Need this in order to read input from console
const readLine = require('readline');
const { exit } = require('process');
const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Lets user choose what they want to do
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

    //When user chooses incorrect option display an error message
    function Error(){
        console.log("Please select an vallid option!");
    }

    //Gets the source of the file
    async function GetSource(){
        reader.question("Enter Source:", (sPath) => {
            SourcePath = sPath;
            GetTarget();
        })
    }

    //Gets the target: where the file should be saved
    async function GetTarget(){
        reader.question("Target:", (tPath) => {
            TargetPath = tPath;
            if (toThisProcedure  == 2) {
                Zip(SourcePath, TargetPath);
            }else if (toThisProcedure == 1){
                Unzip(SourcePath, TargetPath);
            }
        })
    }

    //This call the functions required to zip a folder/file
    function Compress(){
        toThisProcedure = 2;
        GetSource().then();      
    }

    //This call the functions required to UnZip a folder/file
    function Extract(){
        toThisProcedure = 1;
        GetSource().then();      
    }

    //UnZips the source direcotory and saves it at target
    async function Unzip(Source, Target){
        (async () => {
            const files = await decompress(Source, Target);
            console.log("File was extracted");
            exit(0);
        })();
    }
    
     //Zips the source direcotory and saves it at target
     async function Zip(Source, Target){
        var zip = new AdmZip();
        zip.addLocalFolder(Source);
        zip.writeZip(Target + ".zip");
        console.log("File was compressed");
        exit(0);
     }

