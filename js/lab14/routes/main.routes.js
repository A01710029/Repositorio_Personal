//Para utilizar express
const  express = require("express");
const router = express.Router();

//Para utilizar controllers
const indexHandler = require("../controllers/index.controller");
const lab1Handler = require("../controllers/lab1.controller");
const lab5Handler = require("../controllers/lab5.controller");
const lab10Handler = require("../controllers/lab10.controller");
const lab12Handler = require("../controllers/lab12.controller");
const lab13Handler = require("../controllers/lab13.controller");

//get
router.get("/", indexHandler.getIndex);
router.get("/lab1", lab1Handler.getLab1);
router.get("/lab5", lab5Handler.getLab5);
router.get("/lab10", lab10Handler.getLab10);
router.get("/lab12", lab12Handler.getLab12); 
router.get("/lab13", lab13Handler.getLab13); 

//post 
router.post("/lab10", lab10Handler.postLab10);

module.exports = router;