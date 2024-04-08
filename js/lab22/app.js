const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rutas = require("./routes/main.routes");
const path = require("path");

//Para usar cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Para utilizar sesiones
const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Para utilizar uploads
app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));
//Para utilizar multer (manejo de archivos)
const multer = require("multer");

//fileStorage (constante de config para manejar el almacenamiento de archivos)
const fileStorage = multer.diskStorage ({
    destination: (request, file, callback) => {
        //Configurar donde se sube el archivo
        callback(null, path.join(__dirname, "../../uploads"));
    },
    filename: (requets, file, callback) => {
        //Configurar nombre del archivo
        callback(null, Number(new Date()).toString() + '-' + file.originalname);
    },
});

//debe de tener mismo nombre que el archivo in the form
app.use(multer({storage: fileStorage}).single("razon"));

//Para agregar protección contra ataques de CSRF
const csrf = require("csurf");
const csrfProtection = csrf();
app.use(csrfProtection);

app.set("view-engine","ejs");
app.set("views", "views")

//Para utilizar css
app.use("/css", express.static(path.join(__dirname, "../../css")));

//Para utilizar imagenes
app.use("/img", express.static(path.join(__dirname, "../../img")));

//Para sesiones
const rutasUsuarios = require("./routes/users.routes.js");
app.use("/users", rutasUsuarios);

app.use("/", rutas);

//Para error 404
app.use((request, response) => {
    if(!response.headersSent) {
        response.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    }
});

app.listen(3000);