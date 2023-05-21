import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/universalShop";
const clientMongo = new MongoClient(uri);

class crudMongo {
  async find(stringSearch) {
    await clientMongo.connect();

    console.log("Conectado ao MongoDB");
    const db = await clientMongo.db("universalShop");
    const collection = await db.collection("produtos.roupas");
    return await collection
      .find(
        { $text: { $search: `${stringSearch}`, $language: "en", $caseSensitive: false } },
        {}
      )
      .toArray();
  }
}

export default crudMongo;
