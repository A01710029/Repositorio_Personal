console.log("hola mundo desde node!");

//para manipular archivos
const filesystem = require("fs");

//para escribir el segundo parámetro en un archivo
//archivo es definido en el primer parámetro
filesystem.writeFileSync("hola.txt", "Hola mundo desde node!");

const arreglo = [5000, 60,90, 100, 20, 0, 120, 20000, 340, 1000, 50];

//imprime los elementos del arreglo with time delays
for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}

//módulo de node con todas las funciones de un servidor web
const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write("hola mundo desde node!");
    response.end();
});

//mantiene el servidor escuchando peticiones
server.listen(3000);