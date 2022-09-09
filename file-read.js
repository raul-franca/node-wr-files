const fs = require("fs");
    //fs = file system

fs
    .readFile("data.txt",function (err, data) {
        if(err){
            throw err;
        }
        console.log(data.toString("utf-8"));
    });

