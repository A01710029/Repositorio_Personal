const { log } = require("console");
const Recomendacion = require("../models/lab10.model");
const fs = require('fs');

exports.getLab10 = (request, response) => {
    const username = request.session.username || "";
    const csrfToken = request.csrfToken();
    const permisos = request.session.permisos || [];
    response.render("lab10.ejs", {username: username, csrfToken: csrfToken, permisos: permisos});
};

// Procesamiento de datos
exports.postLab10 = (request, response) => {
    const rec = request.body.rec;
    const razonFile = request.file;
    const username = request.session.username || "";

    let razon = "";

    if (razonFile) {
        razon = fs.readFileSync(razonFile.path, 'utf8');
    } else {
        return response.status(400).send("No se ha subido un archivo de texto");
    }

    // Crear objeto Recomendacion
    const newRecomendacion = new Recomendacion(rec, razon, username);

    // Guardar objeto en tabla SQL
    newRecomendacion.save()
        .then(([rows, fieldData]) => {
            //Guardar cookie con la última rec de usuario
            response.setHeader("Set-Cookie", "cookieRec=" + rec + "; HttpOnly");
            // Regresar a index
            response.redirect("/");
        })
        .catch((error) => {console.log(error)});
};

exports.lab10Data = (request, response) => {
    let cookieRec = request.cookies.cookieRec;
  
    Recomendacion.fetch(request.params.recomendacion_id).then(([rows, fieldData]) => {
        response.render("index.ejs", {
            recs: rows,
            cookieRec: cookieRec,
            username: request.session.username || "",
            csrfToken: request.csrfToken(),
            permisos: request.session.permisos || [],
          });
    })
    .catch((error) => {
        console.log(error);
    });
};