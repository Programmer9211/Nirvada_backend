const dbConnection = require("../database_connections/mongodb_connections");

let userCollection = dbConnection().then((result) => {
  return result.userDb.collection("users"); // promise
});

module.exports = userCollection;