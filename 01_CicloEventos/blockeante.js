const fs = require('fs');   


console.log("inicio el programa")

const data = fs.readFileSync("./01_CicloEventos/archivo.txt", "utf8"); /// fs.readFileSync es la funcion que me permite leer un archivo del programa

console.log(data);

console.log("fin del programas")