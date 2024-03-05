// Para inicializar express
const express = require('express');
const app = express();

// Para inicializar body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Para utilizar rutas
const rutas = require("./routes/main.routes");
const path = require("path");

//Para utilizar EJS
app.set('view-engine','ejs');
app.set('views', 'views');

//Para utilizar css
app.use("/css", express.static(path.join(__dirname, "../../css")));

//Para utilizar imagenes
app.use("/img", express.static(path.join(__dirname, "../../img")));

//Para utilizar views
app.use("/", rutas);
app.use(express.static(path.join(__dirname, 'views','404.html')));

//Para devolver un archivo html como respuesta
//error 404
app.use((request, response, next) => {
    response.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);