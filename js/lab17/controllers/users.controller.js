exports.getLogin = (request, response, next) => {
    response.render("login.ejs", {username: request.session.username});
};

exports.postLogin = (request, response, next) => {
    request.session.username = request.body.username;
    request.session.save(() => {
        response.redirect('/');
    });
}

exports.getLogout = (request, response, next) => {
    request.session.destroy((error) => {
        if(error){
            console.error("Error destruyendo sesión:", error);
        } else {
        response.redirect("/users/login");
        } 
    });
};