const candidateDetailsCollection = require("../candidate_db_collection");

async function insertCandidateDetails(candidateData) {
  let collection = await candidateDetailsCollection;

  let response = {
    status: 0,
    message: "Candidate created Sucessfully",
    data: candidateData,
  };

  let result = await collection.insertOne(candidateData);

  if (result.acknowledged) {
    return response;
  } else {
    response["status"] = 2;
    response["message"] = "Data Save nhi hua Phir se try kro :) :)";
    return response;
  }
}

module.exports = insertCandidateDetails;
