/* Ejercicio 1: calcular promedio */
const promedio = function(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    let promedio = sum / arr.length;

    return promedio;
}

//Mostrar resultado en consola
let arrEjemplo = [2,4,6,3,5];

promEjemplo = promedio(arrEjemplo);

console.log("El promedio es " + promEjemplo);

/* Ejercicio 2: string con fs */
const filesystem = require("fs");

filesystem.writeFileSync("lab8-ej2", "Este es el ejercicio 2 del lab 8 :D");

/* Ejercicio 3: factorial */
const factorial = function(num) {
    if(num == 0 || num == 1){
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

//Mostrar resultado en consola
let numEjemplo = 5;

factEjemplo = factorial(numEjemplo);

console.log("El factorial de " + numEjemplo + " es " + factEjemplo);

/* Ejercicio 4: petición al servidor */
const http = require("http");

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Preguntas - Lab 5</title>
            <link rel="stylesheet" href="../css/output.css">
        </head>
    
        <body>
            <nav>
                <h2>Navegación</h2>
                <select onchange="window.location.href= this.value;">
                    <option value="../index.html" selected>Intro</option>
                    <optgroup label="Preguntas">
                        <option value="preguntas-lab1.html">Lab 1</option>
                        <option value="preguntas-lab3.html">Lab 3</option>
                        <option value="preguntas-lab4.html">Lab 4</option>
                        <option value="preguntas-lab5.html">Lab 5</option>
                        <option value="preguntas-lab6.html">Lab 6</option>
                    </optgroup>
                </select>
            </nav>         
            
            <strong>
                Describe Material Design.
            </strong><br></br>
                Material Design es un software de diseño open-source de Google flexible para facilitar y estandarizar el diseño front-end 
                intuitivo y consistente en una variedad de dispositivos. Es caracterizado por su uso de colores vibrantes inspirados en 
                materiales tangibles reales, utilizados en jerarquía para crear una organización visual limpia pero llamativa y sus componentes 
                y patrones adaptables para utilizar como base al empezar un diseño. Utiliza Roboto como tipografía estándar y un sistema de 
                grillas como parte de su diseño adaptativo y dinámico, pero la fuente puede ser modificada. Además, tiene animaciones responsivas 
                que pueden utilizarse para crear unidad entre los distintos estados de una interfaz. 
                <br></br>
    
            <h3>Bibliografía</h3>
                Material Design. (2016, 20 octubre). Material Design. Recuperado de <a href="https://m3.material.io/">https://m3.material.io/</a> 
                <br></br>
    
        </body>
    
        <div class="container">
            <button class="button" onclick="window.location.href='../index.html'">Volver</button>
        </div>
    
        <br></br>
    
        <footer>
            <h2>Herramientas</h2>
            <p>Editor utilizado: <a href="https://code.visualstudio.com/">Visual Studio Code</a></p>
            <p>Framework utilizado: <a href="https://tailwindcss.com/">Tailwind</a></p>
        </footer>
    </html>
    `);
    response.end();
});

server.listen(3000);