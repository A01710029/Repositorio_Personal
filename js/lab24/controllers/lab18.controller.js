exports.getLab18 = (request, response, next) => {
    const username = request.session.username || "";
    response.render("lab18.ejs", {username: username});
    next();
}