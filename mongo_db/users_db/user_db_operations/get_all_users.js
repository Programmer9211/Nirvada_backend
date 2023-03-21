const userCollection = require("../user_db_connection");

async function getAllUserDetails() {
  const result = await userCollection;
  const userData = await result
    .find()
    .toArray();
  return userData;
}

module.exports = getAllUserDetails;
