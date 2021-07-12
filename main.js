let FilePath = "Hello" //the file path of the folder should be stored here.

console.log("Do wou want to extract or compress a folder?");
console.log("1. Extract \n2. Compress");

let option = "";

process.stdin.setEncoding("utf8");
process.stdin.on("Enter your option: ", (answer) => {
    option = answer;

    if (option == "1") {
        console.log("Where is the compressed folder stored?");
    }else if(option == "2"){
        console.log("Where is the folder you wish to compress stored?");
    }else  {
        console.log("Incorrect option chosen");
    }
});

