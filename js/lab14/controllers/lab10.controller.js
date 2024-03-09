const { log } = require("console");
const Recomendacion = require("../models/lab10.model");

exports.getLab10 = (request, response) => {
    response.render("lab10.ejs");
};

// Procesamiento de datos
exports.postLab10 = (request, response) => {
    const rec = request.body.rec;
    const razon = request.body.razon;

    // Crear objeto Recomendacion
    const newRecomendacion = new Recomendacion(rec, razon);

    // Guardar objeto
    newRecomendacion.save();

    // Regresar a index
    response.redirect("/");
};

exports.lab10Data = (request, response) => {
    //const Recomendacion = require("../models/lab10.model");
    const recs = Recomendacion.fetchAll();
    response.render("index.ejs", { recs: recs });
};