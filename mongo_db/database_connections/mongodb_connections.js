const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://Aditya:9555375817@login.8ktgm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function connectDb() {
  try {
    let result = await client.connect();
    let userDb = result.db("Nirvada_App");

    return {
      userDb: userDb,
    };
  } catch (error) {
    console.log(error);
  } finally {
    // await client.close();
  }
}

module.exports = connectDb;
