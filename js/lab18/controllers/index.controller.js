const Recomendacion = require("../models/lab10.model");

exports.getIndex = async (request, response, next) => {
    try {
        const recs = await Recomendacion.fetchAll();
        const cookieRec = request.cookies.cookieRec || "";
        const username = request.session.username || "";
        const csrfToken = request.csrfToken();
        response.render("index.ejs", {data: recs, cookieRec: cookieRec, username: username, csrfToken: csrfToken});
    } catch (error) {
        //En caso de error
        console.error("Error cargando recomendaciones", error);
        //Mostrar página de error
        response.status(500).send("500: Internal Server Error");
    }
};