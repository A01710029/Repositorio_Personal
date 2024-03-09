exports.getLab1 = (request, response, next) => {
    response.render("lab1.ejs");
    next();
}