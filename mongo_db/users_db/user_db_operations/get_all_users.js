const userCollection = require("../user_db_connection");

function getAllUserDetails() {
  return userCollection.then((result) => {
    return result
      .find()
      .toArray()
      .then((userData) => {
        return userData;
      });
  });
}

module.exports = getAllUserDetails;
