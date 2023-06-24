import express from "express";
import controllerSearch from "../controllers/controllerRotaSearchProducts.js";
import controllerLogin from "../controllers/controllerRotaLogin.js";
import controllerNovidades from "../controllers/contollerRotaNovidades.js";
const routerGet = express.Router();
    
routerGet.get("/login", controllerLogin);

routerGet.get("/searchProducts", controllerSearch);

routerGet.get("/novidades",controllerNovidades);
export default routerGet