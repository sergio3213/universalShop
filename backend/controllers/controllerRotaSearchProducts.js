import crudMongo from "../crud/arquivo.js";

 async function controllerSearch(req, res) {
    const crudmongo = new crudMongo()
    console.log(req.query.search)
    const FindCRUD = await crudmongo.find(req.query.search);
    console.log(FindCRUD)
    res.status(200).json(FindCRUD);
  }

  export default controllerSearch