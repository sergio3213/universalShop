import crudMongo from "../crud/arquivo.js";

 async function controllerCriarCadastro(req, res) {
    const crudmongo = new crudMongo()
    const {nome,email,senha} = req.body;
    try{
        crudmongo.insertCadastro(nome,email,senha)
        res.status(200).json({message:"criado"})
    }catch(err){
        res.status(401).json({message:err})
    }
    
  }

  export default controllerCriarCadastro