import jwt from "jsonwebtoken";
import crudMongo from "../crud/arquivo.js";

const secretPasswordJwt = "minhasenha321";

const jwtConfig = {
  expiresIn: "7d",
  algorithm: "HS256",
};

async function controllerLogin(req, res) {
  
  const crudmongo = new crudMongo();
  
  const { email, senha } = req.query;
  
  try {
    const resUsuario = await crudmongo.findUserLogin(email, senha);
   console.log(resUsuario[0].nome)
    const login = { email: req.query.email,nome:resUsuario[0].nome};
  
    const token = jwt.sign(login ,secretPasswordJwt, jwtConfig)
   

    
    if(resUsuario.length>0){
      res.status(200).json(token);
    }else{
      res.status(404).json({message:"Usuário não existe"});
    }
    
  } catch (err) {
    res.status(401).json({ message: err });
  }
}

export default controllerLogin;
