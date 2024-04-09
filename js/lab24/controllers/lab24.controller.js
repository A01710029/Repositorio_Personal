exports.getLab24 = (request, response, next) => {
    const username = request.session.username || "";
    response.render("lab24.ejs", {username: username});
    next();
}