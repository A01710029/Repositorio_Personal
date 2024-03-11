exports.getLab12 = (request, response, next) => {
    const username = request.session.username || "";
    response.render("lab12.ejs", {username: username});
    next();
}