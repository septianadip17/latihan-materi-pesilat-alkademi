var fs = require('fs');

//read file sample.txt
fs.readFile('sample.txt',
    //callback function that is called when reading file is done
    function (err, data) {
        if (err) throw err;
        //data is a buffer containing file content
        console.log("Reading file completed : " + new Date().toISOString());
    });

console.log("After readFile asynchronously : " + new Date().toISOString());