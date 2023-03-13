const candidateDetailsCollection = require("../candidate_db_collection");

async function updateCandidateDetails(candidateData) {
  let collection = await candidateDetailsCollection;

  let response = {
    status: 0,
    message: "Candidate Details Updated Sucessfully",
    data: candidateData,
  };

  const deletionId = { id: candidateData["id"] };

  let deleteResult = await collection.deleteOne(deletionId);

  if (deleteResult.acknowledged) {
    let result = await collection.insertOne(candidateData);

    if (result.acknowledged) {
      return response;
    } else {
      response["status"] = 2;
      response["message"] = "Data Update nhi hua Phir se try kro :) :)";
      return response;
    }
  } else {
    response["status"] = 2;
    response["message"] = "Data Update nhi hua Phir se try kro :) :)";

    return response;
  }
}

module.exports = updateCandidateDetails;
