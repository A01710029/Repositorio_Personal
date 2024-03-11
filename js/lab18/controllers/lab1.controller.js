exports.getLab1 = (request, response, next) => {
    const username = request.session.username || "";
    response.render("lab1.ejs", {username: username});
    next();
}