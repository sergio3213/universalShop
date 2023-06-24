import crudMongo from "../crud/arquivo.js";

async function controllerNovidades(req, res) {
    const instanciaNovidades =  new crudMongo();
    const arrayNovidades = await instanciaNovidades.findNovidades()
    res.status(200).json(arrayNovidades)
}
export default controllerNovidades;
