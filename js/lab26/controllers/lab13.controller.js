exports.getLab13 = (request, response, next) => {
    const username = request.session.username || "";
    response.render("lab13.ejs", {username: username});
    next();
}