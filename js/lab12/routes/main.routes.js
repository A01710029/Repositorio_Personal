//Para utilizar express
const  express = require("express");
const router = express.Router();

//Para la ruta root (página principal)
router.get('/',(request, response) =>{
    response.render('index.ejs');
})

//Para la ruta lab1
router.get('/lab1',(request, response) => {
    response.render('lab1.ejs');
});

//Para la ruta lab5
router.get('/lab5',(request, response) => {
    response.render('lab5.ejs');
})

//Para la ruta lab10 (GET - recomendaciones) 
router.get('/lab10', (request, response) => {
    response.render('lab10.ejs');
});

//Para la ruta lab10 (POST - recomendaciones) 
router.post('/lab10', (request, response) => {
    const { rec, razon } = request.body;
    recs.push({rec, razon});
    response.render('confirmacion.ejs', { rec, razon });
});

//Para la ruta lab 12
router.get('/lab12', (request, response) => {
    response.render('lab12.ejs');
});

module.exports = router;