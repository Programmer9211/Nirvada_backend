const userDetailsCollection = require("../user_vote_details_collection");

async function updateCandidateDetails(electionId) {
  let collection = await userDetailsCollection;

  let response = {
    status: 0,
    message: "Candidate Deleted Sucessfully",
    data: candidateId,
  };

  const deletionId = { election_id: electionId };

  let deleteResult = await collection.deleteMany(deletionId);

  if (deleteResult.acknowledged) {
    return response;
  } else {
    response["status"] = 2;
    response["message"] = "Unable to save data, please try again";

    return response;
  }
}

module.exports = updateCandidateDetails;
