const userVoteDetailsCollection = require("../user_vote_details_collection");

async function insertUserVoteDetails(userVoteData) {
  let collection = await userVoteDetailsCollection;

  let response = {
    status: 0,
    message: "User Vote Casted Sucessfully",
    data: userVoteData,
  };

  let result = await collection.insertOne(userVoteData);

  if (result.acknowledged) {
    return response;
  } else {
    response["status"] = 2;
    response["message"] = "Something went wrong, please try again";
    return response;
  }
}

module.exports = insertUserVoteDetails;
