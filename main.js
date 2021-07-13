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

    function GetSource() {
        reader.question("Please enter the location of the file:", (sourcePath) => {
            SourcePath = sourcePath;
        });
    }

    function GetTargetPath() {
        reader.question("Enter the location you want to save the file:", (targetPath) => {
            TargetPath = targetPath;
        })
    }

    function Compress() { 
        GetSource();
        GetTargetPath();
        Zip();
    }

    function Extract() {
        GetSource();
        GetTargetPath();
        Unzip();
    }

    // ################ Unzip Folder ######################
    function Unzip(FilePath){
        (async () => {
            const files = await decompress("D:\\Documents\\ZipThisFolder.zip", "D:\\Documents\\DecompressedFolder\\");
            console.log("File was extracted");
        })();
    }
     //################ Unzip Folder ######################
     //############### Zip Folder #########################
     function Zip(FilePath){
        var zip = new AdmZip();
        zip.addLocalFolder(FilePath);
        zip.writeZip("D:\\Documents\\CompressedFolder\\Zipped.zip");
        console.log("File was compressed");
     }
     //############### Zip Folder #########################
