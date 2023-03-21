const userCollection = require("../user_db_connection");

function getParticularUser(voterIdNumber) {
  return userCollection.then((result) => {
    return result
      .find({ voter_id_number: voterIdNumber })
      .toArray()
      .then((userData) => {
        return userData;
      });
  });
}

module.exports = getParticularUser;
