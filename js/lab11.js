// Para inicializar express
const express = require('express');
const app = express();

// Para inicializar body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Barra de navegación de página
//Modificado para operar con url en vez de archivos
const header = `
<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TC2005B - Paulina Almada</title>
        <link rel="stylesheet" href="/css/output.css">
    </head>

    <body>
        <nav>
            <h2>Navegación</h2>
            <select onchange="window.location.href= this.value;">
                <option value="/" selected>Intro</option>
                <optgroup label="Preguntas">
                    <option value="/lab1">Lab 1</option>
                    <option value="/lab3">Lab 3</option>
                    <option value="/lab4">Lab 4</option>
                    <option value="/lab5">Lab 5</option>
                    <option value="/lab6">Lab 6</option>
                    <option value="/lab10">Lab 10</option>
                    <option value="/lab11">Lab 11</option>
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
<button class="button" onclick="window.location.href='../'">Volver</button>
</div>
`;

//Arreglo para datos de usuario
const recs = [{}];

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //para avanzar a la siguiente petición
  });

//de específico a general
//ruta 1
app.use("/lab1", (request, response, next) => {
    const contenido = header + ` 
        <strong>
            ¿Cuál es la diferencia entre Internet y la World Wide Web?
        </strong><br></br>
            La diferencia entre el internet y la World Wide Web es que el internet es la infraestructura física de redes de comunicación de datos e 
            información entre dispositivos mientras que la World Wide Web es un servicio intangible que opera dentro del Internet para transferir y 
            acceder información y recursos. 
            <br></br>
        <strong>
            ¿Cuáles son las partes de un URL?
        </strong><br></br>
            Las partes de un URL son el protocolo (HTTP, HTTPS), el subdominio (www), el dominio (google), el dominio de primer nivel (.com, .org), 
            la ruta de acceso (un directorio dentro del directorio superior, separado por “/”), el slug (la descripción de la página específica) y 
            los parámetros (indican la información que se está enviando, separado por “?”).
            <br></br>
        <strong>
            ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?
        </strong><br></br>
            Los métodos HTTP permiten a un usuario realizar ciertas acciones en un recurso. El método GET recupera un recurso para obtener datos de 
            un servidor. El método HEAD solo manda el encabezado de un recurso, a diferencia de GET. El método POST envía datos a un servidor para 
            ser procesados. El método PUT actualiza un recurso existente en el servidor, mandando toda la información del recurso para lograr esto. 
            El método PATCH realiza modificaciones parciales a un recurso, mandando solo la información con cambios para la actualización. El método 
            DELETE elimina un recurso en el servidor.
            <br></br>
        <strong>
            ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? 
            ¿Por qué?
        </strong><br></br>
            Se debe utilizar el método POST, ya que este es el método más seguro. Esto es porque manda los datos sensibles, como en este caso el usuario 
            y la contraseña, en el cuerpo de la solicitud en vez del URL (lo que pasaría con GET) o los encabezados (lo que pasaría con HEAD). El cuerpo 
            de la solicitud en HTTPS se cifra, por lo que se asegura el contenido si se encuentra dentro de este espacio, por lo que se busca mandar 
            información con POST que lo coloca ahí.
            <br></br>
        <strong>
            ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?
        </strong><br></br>
            Se utiliza el método GET, ya que el navegador manda una solicitud GET al servidor para obtener la página web pedida. 
            <br></br>
        <strong>
            Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?
        </strong><br></br>
            El código 200 de un servidor web significa que la solicitud ha sido procesada correctamente, por lo que no indica ningún error. 
            <br></br>
        <strong>
            ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con 
            un error 404? ¿Por qué?
        </strong><br></br>
            Un error 404 significa que el servidor no pudo localizar la página localizada, usualmente porque el recurso pedido ha sido borrado o ha cambiado de dirección, 
            por lo que es responsabilidad del desarrollador corregir este error. Esta responsabilidad se debe, en parte, al simple hecho de que es un error que está en su 
            poder arreglar y es la responsabilidad ética de cualquier desarrollador de presentar un trabajo completo y operacional. También, corregir estos errores mantiene 
            la confianza e integridad de la página,  asegurando que todos los elementos son accesibles y estén operando correctamente. 
            <br></br>
        <strong>
            ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un 
            error 500? ¿Por qué?
        </strong><br></br>
            Un error 500 significa que existe un error interno en el servidor. De nuevo, es responsabilidad del desarrollador corregir este error, ya que es indicativo 
            de un grave error estructural en la creación de la página. Como con un error 404, el desarrollador tiene una responsabilidad moral de asegurar que su 
            producto es operable. Además, se tiene que arreglar ya que están relacionados a problemas con el código fuente o la conexión con la base de datos, lo que 
            impide la funcionalidad de la página y pone en riesgo la seguridad y privacidad de la misma.
            <br></br>
        <strong>
            ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 
            estén desaprobados.
        </strong><br></br>
            Un atributo desaprobado de HTML5 se considera obsoleto, por lo que no se recomienda utilizarlo ya que existen alternativas más modernas, aunque 
            técnicamente siguen funcionando (al menos, por el momento). Algunos elementos de HTML 4 que están depreciados son bgcolor, border y align. Todos 
            fueron reemplazados con CSS.
            <br></br>
        <strong>
            ¿Cuáles son las diferencias principales entre HTML 4 y HTML5?
        </strong><br></br>
            Las diferencias principales entre HTML4 y HTML5 son un uso incrementado de elementos semánticos como "header" y "nav", en vez de agruparlos 
            como "div", mejor compatibilidad con dispositivos móviles con diseño responsivo y la clarificación de la estructura de la página a través 
            de los elementos previamente mencionados, mejor integración de soporte para otros medios como audio y video, mejoras en rendimiento y 
            accesibilidad y mejores tipos de entrada de formularios para eliminar la necesidad de escribir scripts particulares.
            <br></br>
        <strong>
            ¿Qué componentes de estructura y estilo tiene una tabla?
        </strong><br></br>
            Los componentes de estructura de una tabla son "table", el cual define la tabla en sí, "tr", que define las filas, "th" que define 
            los encabezados de columna y "td", que define la celda de datos. Los componentes de estilo de una tabla son los bordes, el espacio 
            entre celdas, el tamaño del texto, la alineación del texto y el color de fondo de la tabla.
            <br></br>
        <strong>
            ¿Cuáles son los principales controles de una forma HTML5?
        </strong><br></br>
            Los principales controles de una forma HTML5 son "input", el que sirve para crear controles de entrada de distintos tipos 
            de información como texto y contraseñas, "textarea", que crea zonas de texto, "select" y "option", que permite crear menús 
            desplegables, "button", que permite crear botones que activan acciones específicas y "datalist", que permite crear una 
            lista de opciones para que el usuario seleccione entre ellas en el campo de entrada.
            <br></br>
        <strong>
            ¿Qué tanto soporte HTML5 tiene el navegador que utilizas?
        </strong><br></br>
            El navegador que usualmente utilizo, Google Chrome versión 121.0.6167.161, tiene un soporte de 581 de 594 puntos.  
            <br></br>
        <strong>
            ¿Cuál es el ciclo de vida de los sistemas de información?
        </strong><br></br>
            El ciclo de vida de los sistemas de información empieza con la identificación del problema o la necesidad del usuario 
            por la que se está creando el sistema para definir la información preliminar necesaria antes de empezar el proceso de 
            desarrollo. Después, se lleva a cabo un análisis de los requisitos del sistema, incluyendo la elaboración de diagramas, 
            para definir la estructura del sistema. Con esto identificado, se lleva a cabo el desarrollo, el que implica la codificación 
            del sistema y la realización de pruebas. Ya que se tiene un sistema funcional, se monitorea y soporta el sistema, buscando 
            asegurar que el sistema funciona a largo plazo. Finalmente, se evalúa el sistema en términos de eficiencia y el cumplimiento 
            de los objetivos planteados en la primera fase, implementando la retroalimentación recibida.
            <br></br>
        <strong>
            ¿Cuál es el ciclo de desarrollo de los sistemas de información?
        </strong><br></br>
            El ciclo de desarrollo de los sistemas de información empieza con la identificación de los requisitos para comprender
            el problema a detalle. Después, se define la estructura del sistema a través de artefactos. Con toda la planeación 
            terminada, se codifica y se diseña el sistema hasta tener un sistema funcional. Se realizan pruebas sobre este sistema 
            para asegurar su funcionalidad. Después de concluir las pruebas, se implementa el sistema en el entorno de producción, 
            donde se puede llevar a cabo soporte y mantenimiento para asegurar la funcionalidad a largo plazo y evaluación para 
            actualizar y adaptar el sistema. 
            <br></br>

        <h3>Bibliografía</h3>
            Semrush. (2023, 29 septiembre). ¿Qué es una URL? Recuperado de <a href="https://es.semrush.com/blog/que-es-una-url/">https://es.semrush.com/blog/que-es-una-url/</a> 
            <br></br>
            Diego. (2016, 20 abril). Métodos HTTP. Recuperado de <a href="https://diego.com.es/metodos-http">https://diego.com.es/metodos-http</a> 
            <br></br>
            Semrush. (2023, 7 junio). Códigos de estado HTTP: Todo lo que necesitas saber. Recuperado de <a href="https://es.semrush.com/blog/codigos-de-estado-http/">https://es.semrush.com/blog/codigos-de-estado-http/</a> 
            <br></br>
            Dongee. (2023, 7 febrero). Las principales diferencias entre HTML y HTML5. Recuperado de <a href="https://www.dongee.com/tutoriales/las-principales-diferencias-entre-html-y-html5/">https://www.dongee.com/tutoriales/las-principales-diferencias-entre-html-y-html5/</a> 
            <br></br>
            Mozilla. (2023, 2 agosto). HTML5 input types. Recuperado de <a href="https://developer.mozilla.org/es/docs/Learn/Forms/HTML5_input_types">https://developer.mozilla.org/es/docs/Learn/Forms/HTML5_input_types</a> 
            <br></br>
            Gestiopolis. (2015, julio 20). Ciclo de vida de un sistema de información. Recuperado de <a href="https://gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/">https://gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/</a>
            <br></br>
    </body>` + boton + footer;
    response.send(contenido);
});

//ruta 2
app.use("/lab5", (request, response, next) => {
    let contenido = header + `<body>
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
    </body>` + boton + footer;
    response.send(contenido);
});

//ruta 3
app.use("/lab11", (request, response, next) => {
    let contenido = header + `
    <body>
        <strong>
            Describe el archivo package.json
        </strong><br></br>
            El archivo package.json es un archivo de configuración para proyectos node.js. Contiene información de un proyecto y sirve como 
            un índice del mismo. Entre la información que contiene está el nombre, la versión, la descripción, la asignación del archivo que 
            sirve como main o punto de entrada, los scripts o comandos de terminal instalados, el repositorio en el que está ubicado y el 
            autor del proyecto.  
            <br></br>
        <h3>Bibliografía</h3>
            LenguajeJS. (2020, 6 agosto). Administración de package.json. Recuperado de <a href="https://lenguajejs.com/npm/administracion/package-json/">https://lenguajejs.com/npm/administracion/package-json/</a> 
        <br></br>
    </body>` + boton + footer;
    response.send(contenido);
});

//ruta 4
app.get("/lab10", (request, response, next) => {
    const contenido = header + `
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
      </div>` + boton + footer;
      response.send(contenido);
});

//procesar informacion
app.post("/lab10", (request, response, next) => {
    console.log(request.body);
    recs.push(request.body);
    const confirmacion = header + `
    <h3>¡Recomendación enviada con éxito!</h3>
    <p>Tu recomendación ha sido enviada correctamente. ¡Gracias!<p>
    <br></br>
    ` + boton + footer;
    response.send(confirmacion);
});

//ruta 5 - root
app.get("/", (request, response, next) => {
    console.log("ruta /");
    let contenido = header;
    contenido += `
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
    `;
    
    contenido += `<h3>Recomendaciones Recibidas</h3>
    <table>
        <tr><th>Recomendación</th><th>Razón</th></tr>
    `;

    let recs_recib = "";
    for(let rec of recs){
        if(rec.rec && rec.razon){
            recs_recib = `<tr><td>${(rec.rec)}</td><td>${(rec.razon)}</td></tr>`;
        }
    }

    contenido += recs_recib + `</table>` + footer;
    response.send(contenido);
});

//error 404
app.use((request, response, next) => {
    response.status(404);
    const contenido = header + `
        <h3> Oops :( </h3>
        
        No existe el lab que estás buscando! 
        <br></br>
        ` + boton + footer;
        response.send(contenido);
});

app.listen(3000);