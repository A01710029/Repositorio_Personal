//Para utilizar express
const  express = require("express");
const router = express.Router();
const isAuth = require("../util/is-auth");

//Para utilizaar RBAC
const canView = require("../util/can-view");
const canAdmin = require("../util/can-admin");

//Para utilizar controllers
const indexHandler = require("../controllers/index.controller");
const lab1Handler = require("../controllers/lab1.controller");
const lab5Handler = require("../controllers/lab5.controller");
const lab10Handler = require("../controllers/lab10.controller");
const lab12Handler = require("../controllers/lab12.controller");
const lab13Handler = require("../controllers/lab13.controller");
const lab17Handler = require("../controllers/lab17.controller");
const lab18Handler = require("../controllers/lab18.controller");
const lab19Handler = require("../controllers/lab19.controller");
const lab24Handler = require("../controllers/lab24.controller");

//get
router.get("/", isAuth, canView, indexHandler.getIndex);
router.get("/lab1", isAuth, canView, lab1Handler.getLab1);
router.get("/lab5", isAuth, canView, lab5Handler.getLab5);
router.get("/lab10", isAuth, canAdmin, lab10Handler.getLab10);
router.get("/lab12", isAuth, canView, lab12Handler.getLab12); 
router.get("/lab13", isAuth, canView, lab13Handler.getLab13); 
router.get("/lab17", isAuth, canView, lab17Handler.getLab17); 
router.get("/lab18", isAuth, canView, lab18Handler.getLab18); 
router.get("/lab19", isAuth, canView, lab19Handler.getLab19); 
router.get("/lab24", isAuth, canView, lab24Handler.getLab24); 

//post 
router.post("/lab10", isAuth, lab10Handler.postLab10);
router.post("/delete", isAuth, lab10Handler.postDelete);

module.exports = router;