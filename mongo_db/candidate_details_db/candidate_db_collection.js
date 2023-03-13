const dbConnection = require("../database_connections/mongodb_connections");

let candidateCollection = dbConnection().then((result) => {
  return result.userDb.collection("candidate_details"); // promise
});

module.exports = candidateCollection;