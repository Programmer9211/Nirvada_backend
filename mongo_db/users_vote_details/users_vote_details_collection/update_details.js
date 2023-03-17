const userVoteDetailsCollection = require("../user_vote_details_collection");

async function updateUserVoteDetails(voterIdNumber) {
  let collection = await userVoteDetailsCollection;

  let response = {
    status: 0,
    message: "User Vote Casted Sucessfully",
    data: voterIdNumber,
  };

  const filter = { voter_id_number: voterIdNumber };
  const update = { $set: { is_vote_casted: true } };

  const result = await collection.updateOne(filter, update);

  if (result.acknowledged) {
    return response;
  } else {
    response["status"] = 2;
    response["message"] = "Something went wrong, please try again";
    return response;
  }
}

module.exports = updateUserVoteDetails;
