import express from "express";
import controllerSearch from "../controllers/controllerRotaSearchProducts.js";

const routerGet = express.Router();

routerGet.get("/searchProducts", controllerSearch);

export default routerGet