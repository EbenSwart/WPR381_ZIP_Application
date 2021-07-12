// let procedure = "";
// let FilePath = "";

// const readLine = require('readline');
// const reader = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// reader.question(
//     "Please choose a function to do (Enter only the number): \n 1. Extract"+
//     "\n 2. Compress \n Your choice: ", (answer) => {
//         procedure = answer;  
//         if (procedure === "1") {
//             Extract();
//         }else if(procedure === "2"){
//             Compress();
//         }else{
//             Error();
//         }
//     });

//     function Error(){
//         console.log("Please select an vallid option!");
//     }

//     function Compress() {
//         reader.question("Please enter the filepath\n", (getFilePath) => {
//             FilePath = getFilePath;
//             PrintFile();
//         })
//     }

//     function Extract() {
//         reader.question("Please enter the filepath\n", (getFilePath) => {
//             FilePath = getFilePath;
//             PrintFile();
//         })
//     }

//     function PrintFile(){
//         console.log("The file path is: " + FilePath);
//     }

    //#############################################################################################

    var file_system = require('fs');
    var archiver = require('archiver');
    var path = require('path');
    
    //var output = file_system.createWriteStream('Test.zip');
    var output = path("D:\\Documents").createWriteStream('Test.zip');
    var archive = archiver('zip');
    


    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });
    
    archive.on('error', function(err){
        throw err;
    });
    
    archive.pipe(output);
    
    // append files from a sub-directory, putting its contents at the root of archive
    //archive.directory(source_dir, false);
    
    // append files from a sub-directory and naming it `new-subdir` within the archive
    //archive.directory('subdir/', 'new-subdir');
    archive.directory("D:\Documents\ZipThisFolder","D:\\Documents");
    
    archive.finalize();