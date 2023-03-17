const dbConnection = require("../database_connections/mongodb_connections");

let electionCollection = dbConnection().then((result) => {
  return result.userDb.collection("election_details"); // promise
});

module.exports = electionCollection;
