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

    //Guardar cookie con la última rec de usuario
    response.setHeader("Set-Cookie", "cookieRec=" + rec);

    // Regresar a index
    response.redirect("/");
};

exports.lab10Data = (request, response) => {
    console.log("Ruta /");
    
    //const recs = Recomendacion.fetchAll;
    let cookieRec = request.get("Cookie");
  
    //Para que el programa no truene
    if (cookieRec) {
      cookieRec = cookieRec.split("=")[1];
    } else {
      cookieRec = "";
    }
    console.log(cookieRec);
    response.render("index.ejs", {
      recs: Recomendacion.fetchAll(),
      cookieRec: cookieRec,
    });
};