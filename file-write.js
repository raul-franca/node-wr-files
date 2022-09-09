
const fs = require("fs");
    //fs = file system
fs
    .writeFile("data.txt","Conteudo do arquivo",function (err) {
       if(err){
           throw err;
       }
    });
