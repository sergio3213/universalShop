import express from "express";
import controllerCriarCadastro from "../controllers/controllerRotaCriarCadastro.js";

const routerPost = express.Router();

routerPost.post("/criarCadastro", controllerCriarCadastro);

export default routerPost