exports.getLab5 = (request, response, next) => {
    const username = request.session.username || "";
    response.render("lab5.ejs", {username: username} );
    next();
}