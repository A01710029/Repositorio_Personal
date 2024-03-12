//Para utilizar express
const  express = require("express");
const router = express.Router();
const isAuth = require("../util/is-auth");

//Para utilizar controllers
const indexHandler = require("../controllers/index.controller");
const lab1Handler = require("../controllers/lab1.controller");
const lab5Handler = require("../controllers/lab5.controller");
const lab10Handler = require("../controllers/lab10.controller");
const lab12Handler = require("../controllers/lab12.controller");
const lab13Handler = require("../controllers/lab13.controller");
const lab17Handler = require("../controllers/lab17.controller");

//get
router.get("/", isAuth, indexHandler.getIndex);
router.get("/lab1", isAuth, lab1Handler.getLab1);
router.get("/lab5", isAuth, lab5Handler.getLab5);
router.get("/lab10", isAuth, lab10Handler.getLab10);
router.get("/lab12", isAuth, lab12Handler.getLab12); 
router.get("/lab13", isAuth, lab13Handler.getLab13); 
router.get("/lab17", isAuth, lab17Handler.getLab17); 

//post 
router.post("/lab10", isAuth, lab10Handler.postLab10);

module.exports = router;