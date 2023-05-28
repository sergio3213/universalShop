import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/universalShop";
const clientMongo = new MongoClient(uri);

class crudMongo {
  async find(stringSearch) {
    await clientMongo.connect();

    const db = await clientMongo.db("universalShop");
    const collection = await db.collection("produtos.roupas");
    return await collection
      .find(
        {
          $text: {
            $search: `${stringSearch}`,
            $language: "en",
            $caseSensitive: false,
          },
        },
        {}
      )
      .toArray();
  }

  async insertCadastro(nome, email, senha) {
    await clientMongo.connect();

    const db = await clientMongo.db("universalShop");
    const collection = await db.collection("usuarios");
    return await collection.insertOne({ nome, email, senha });
  }

  async findUserLogin(email,senha) {
    await clientMongo.connect();

    const db = await clientMongo.db("universalShop");
    const collection = await db.collection("usuarios");
    return await collection
      .find(
        {$and:[{email:email},{senha:senha}]},
        {}
      )
      .toArray();
  }

}

export default crudMongo;
