exports.getLab19 = (request, response, next) => {
    const username = request.session.username || "";
    response.render("lab19.ejs", {username: username});
    next();
}