exports.getLab17 = (request, response, next) => {
    const username = request.session.username || "";
    response.render("lab17.ejs", {username: username});
    next();
}