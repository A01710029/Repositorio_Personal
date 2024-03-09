const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rutas = require("./routes/main.routes");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view-engine","ejs");
app.set("views", "views")

//Para utilizar css
app.use("/css", express.static(path.join(__dirname, "../../css")));

//Para utilizar imagenes
app.use("/img", express.static(path.join(__dirname, "../../img")));

app.use("/", rutas);

//Para error 404
app.use((request, response) => {
    if(!response.headersSent) {
        response.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    }
});

app.listen(3000);