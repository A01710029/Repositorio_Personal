//Bajar módulos requeridos
const http = require("http");
const filesystem = require("fs");
const path = require("path");

//Barra de navegación de página
const header = `
<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TC2005B - Paulina Almada</title>
        <link rel="stylesheet" href="css/output.css"> <!--change here-->
    </head>

    <body>
        <nav>
            <h2>Navegación</h2>
            <select onchange="window.location.href= this.value;">
                <option value="index.html" selected>Intro</option>
                <optgroup label="Preguntas">
                    <option value="preguntas/preguntas-lab1.html">Lab 1</option>
                    <option value="preguntas/preguntas-lab3.html">Lab 3</option>
                    <option value="preguntas/preguntas-lab4.html">Lab 4</option>
                    <option value="preguntas/preguntas-lab5.html">Lab 5</option>
                    <option value="preguntas/preguntas-lab6.html">Lab 6</option>
                </optgroup>
            </select>
        </nav>
`;

//Footer de la página
const footer = `
<footer>
        <h2>Herramientas</h2>
        <p>Editor utilizado: <a href="https://code.visualstudio.com/">Visual Studio Code</a></p>
        <p>Framework utilizado: <a href="https://tailwindcss.com/">Tailwind</a></p>
    </footer>
`;

const boton = `
<div class="container">
<button class="button" onclick="window.location.href='../index.html'">Volver</button>
</div>
`;

//Arreglo para datos de usuario
const recs = [{}];

//Crear servidor
const server = http.createServer((request, response) => {
    console.log(request.url);

    //agregar css
    if(request.url == "/css/output.css"){
        response.setHeader("Content-Type", "text/css");
        filesystem.readFile('../css/output.css', function(err, data) {
            if(err){
                response.writeHead(500);
                return response.end("Error con css");
            }
        response.write(data);
        response.end();
    });
    return;
    }

    //agregar imagenes
    if(request.url == "/img/foto-reciente.jpg"){
        response.setHeader("Content-Type", "text/css");
        filesystem.readFile('../img/foto-reciente.jpg', function(err, data) {
            if(err){
                response.writeHead(500);
                return response.end("Error con imagen");
            }
        response.write(data);
        response.end();
    });
    return;
    }

    if(request.url == "/" || request.url == "/index.html") { //root
        response.setHeader("Content-Type", "text/html");
        response.write(header);
        response.write(`
        <body>
        <h3 class="text-2xl font-bold">Bienvenidxs!</h3>
       
        Soy Paulina Almada, matrícula A01710029. Esta es mi página web para la materia TC2005B, 
        Construcción de Software y Toma de Decisiones.<br></br>

        <div class="img">
            <img class ="imagen-intro" src="/img/foto-reciente.jpg" alt="Paulina Almada">
        </div>

        <table>
            <thead>
                <h3>
                Intereses
                </h3>
            </thead>
            <tbody>
                <tr><td>Programación</td><td>Escritura</td></tr>
                <tr><td>Videojuegos</td><td>Música</td></tr>
            </tbody>
        </table>

        <h3>Datos de Contacto</h3>
        <strong>Correo: </strong> <a href="mailto:A01710029@tec.mx">A01710029@tec.mx</a>
        <br></br>
        </body>
        `);

        response.write(`<h3>Recomendaciones Recibidas</h3>
        <table>
            <tr><th>Recomendación</th><th>Razón</th></tr>
        `);

        for(let rec of recs){
            if(rec.rec && rec.razon){
                response.write(`<tr><td>${(rec.rec)}</td><td>${(rec.razon)}</td></tr>`);
            }
        }
        response.write(`</table>`);
        
        response.write(footer);
        response.end();
        //segunda ruta
    } else if (request.url == "/lab10" && request.method == "GET"){
        response.setHeader("Content-Type", "text/html");
        response.write(header);
        response.write(`
        <h3 id="title" class="title"> Mandáme recomendaciones! </h3>
            <p> ¿Hay algún show, peli o juego que crees que me gustaría? Dime aquí:</p>
            <br></br>
            <div class='container'>
              <form action="/lab10" method="POST">
                <label class="label" for="rec">Recomendación:</label>
                <input name="rec" class="input" type="text" id="rec"><br>
                <label class="label" for="razon">Razón:</label>
                <input name="razon" class="input" type="text" id="razon"><br><br>
                <button type='submit'>Enviar</button>
              </form>
              </div>
        `);
        response.write(footer);
        response.end();
    } else if (request.url == "/lab10" && request.method == "POST"){
        //obtener datos del usuario
        const datos = [];
        request.on("data", (dato) =>{
            console.log(dato);
            datos.push(dato);
        });

        //guardar datos
        return request.on("end", () =>{
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const rec = datos_completos.split("&")[0].split("=")[1];
            const razon = datos_completos.split("&")[1].split("=")[1];
            recs.push({rec: rec, razon: razon});
            filesystem.writeFileSync("recs.txt", "La recomendación es: " + rec + "\n" + "La razón es: " + razon);
            
            //mensaje de confirmación
            response.setHeader("Content-Type", "text/html");
            response.write(header);
            response.write(`
            <h3>¡Recomendación enviada con éxito!</h3>
            <p>Tu recomendación ha sido enviada correctamente. ¡Gracias!<p>
            <br></br>
            `);
            response.write(boton);
            response.write(footer);
            return response.end();
        });
    } else if (request.url == "/lab5" || request.url == "/preguntas/preguntas-lab5.html"){ //tercera ruta
        response.setHeader("Content-Type", "text/html");
        response.write(header);
        response.write(`
        <body>
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
        `);
        response.write(boton);
        response.write(footer);
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.write(header);
        response.write(`
        <h3> Oops :( </h3>
        
        No existe el lab que estás buscando! 
        <br></br>
        `);
        response.write(boton);
        response.write(footer);
        response.end();
    }
});

server.listen(3000);