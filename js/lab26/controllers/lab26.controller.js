exports.getLab26 = (request, response, next) => {
    const username = request.session.username || "";
    response.render("lab26.ejs", { username: username});
};