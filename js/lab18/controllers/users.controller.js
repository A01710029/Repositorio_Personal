const Usuario = require("../models/usuario.model");

//Para encriptar passwords
const bcrypt = require("bcryptjs");

exports.getLogin = (request, response, next) => {
    const error = request.session.error || "";
    request.session.error = "";
    response.render("login.ejs", {
        username: request.session.username,
        registrar: false,
        error: error,
    });
};

exports.postLogin = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
    .then(([users, fieldData]) => {
        if(users.length == 1) {
            const user = users[0];
            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.username = user.username;
                        return request.session.save(err => {
                            response.redirect("/");
                        });
                    } else {
                        request.session.error = "El usuario y/o contraseña son incorrectos."
                        return response.redirect("/users/login");
                    }
                }).catch(err => {
                    response.redirect("/users/login");
                });
            } else {
                request.session.error = "El usuario y/o contraseña son incorrectos."
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
    const error = request.session.error || "";
    request.session.error = "";
    response.render("login.ejs", { 
        username: request.session.username || "",
        registrar: true,
        error: error,
    });
};

exports.postSignup = (request, response, next) => {
    const nuevoUsuario = new Usuario(request.body.username, request.body.password);
    nuevoUsuario.save()
        .then(([rows, fieldData])=>{
            response.redirect("/users/login");
        })
        .catch((error)=>{
            console.log(error);
            request.session.error = "Usuario incorrecto";
            response.redirect("/users/signup");
        });
};