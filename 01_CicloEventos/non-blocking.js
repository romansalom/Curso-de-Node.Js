const fs = require('fs');


 fs.readFile('./01_CicloEventos/archivo.txt', 'utf8', (err, data)=> {
    if(data){
        console.log(data);
    }else{
        console.log(err);
    }
});

console.log("fin del programa");