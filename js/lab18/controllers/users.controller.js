const Usuario = require("../models/usuario.model");

exports.getLogin = (request, response, next) => {
    response.render("login.ejs", {
        username: request.session.username,
        registrar: false,
    });
};

exports.postLogin = (request, response, next) => {
    Usuario.fetchOne(request.body.username, request.body.password)
        .then(([rows, fieldData]) => {
            if(rows.length == 1) {
                request.session.username = request.body.username;
                response.redirect('/');
            } else {
                response.redirect("/users/login");
            }
        })
        .catch((error) => {console.log(error)});
};

exports.getLogout = (request, response, next) => {
    request.session.destroy((error) => {
        if(error){
            console.error("Error destruyendo sesión:", error);
        } else {
        response.redirect("/users/login");
        } 
    });
};

exports.getSignup = (request, response, next) => {
    response.render("login.ejs", { 
        username: request.session.username || "",
        registrar: true,
    });
};

exports.postSignup = (request, response, next) => {
    const nuevoUsuario = new Usuario(request.body.username, request.body.password);
    nuevoUsuario.save()
        .then(([rows, fieldData])=>{
            response.redirect("/users/login");
        })
        .catch((error)=>{console.log(error)});
};