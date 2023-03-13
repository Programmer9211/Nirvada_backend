const dbConnection = require("../database_connections/mongodb_connections");

let userVoteCollection = dbConnection().then((result) => {
  return result.userDb.collection("user_vote_details"); // promise
});

module.exports = userVoteCollection;
