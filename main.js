let procedure = "";
let FilePath = "";

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

    function Compress() {
        reader.question("Please enter the filepath\n", (getFilePath) => {
            FilePath = getFilePath;
            PrintFile();
        })
    }

    function Extract() {
        reader.question("Please enter the filepath\n", (getFilePath) => {
            FilePath = getFilePath;
            PrintFile();
        })
    }

    function PrintFile(){
        console.log("The file path is: " + FilePath);
    }


