import express from "express";
import controllerSearch from "../controllers/controllerRotaSearchProducts.js";
import controllerLogin from "../controllers/controllerRotaLogin.js";

const routerGet = express.Router();
    
routerGet.get("/login", controllerLogin);

routerGet.get("/searchProducts", controllerSearch);

export default routerGet