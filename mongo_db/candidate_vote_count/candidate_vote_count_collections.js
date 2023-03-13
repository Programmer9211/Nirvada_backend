const dbConnection = require("../database_connections/mongodb_connections");

let candidateVoteCountCollection = dbConnection().then((result) => {
  return result.userDb.collection("candiate_vote_count"); // promise
});

module.exports = candidateVoteCountCollection;
