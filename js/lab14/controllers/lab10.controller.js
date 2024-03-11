const { log } = require("console");
const Recomendacion = require("../models/lab10.model");

exports.getLab10 = (request, response) => {
    const username = request.session.username || "";
    response.render("lab10.ejs", {username: username});
};

// Procesamiento de datos
exports.postLab10 = (request, response) => {
    const rec = request.body.rec;
    const razon = request.body.razon;

    // Crear objeto Recomendacion
    const newRecomendacion = new Recomendacion(rec, razon);

    // Guardar objeto
    newRecomendacion.save();

    const username = request.session.username;

    //Guardar cookie con la última rec de usuario
    response.setHeader("Set-Cookie", "cookieRec=" + rec + "; HttpOnly");

    // Regresar a index
    response.redirect("/");
};

exports.lab10Data = (request, response) => {
    let cookieRec = request.cookies.cookieRec;
  
    response.render("index.ejs", {
      recs: Recomendacion.fetchAll(),
      cookieRec: cookieRec,
    });
};