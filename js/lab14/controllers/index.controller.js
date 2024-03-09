const Recomendacion = require("../models/lab10.model");

exports.getIndex = async (request, response, next) => {
    try {
        const recs = await Recomendacion.fetchAll();
        response.render("index.ejs", {data: recs});
    } catch (error) {
        //En caso de error
        console.error("Error cargando recomendaciones", error);
        //Mostrar página de error
        response.status(500).send("500: Internal Server Error");
    }
};