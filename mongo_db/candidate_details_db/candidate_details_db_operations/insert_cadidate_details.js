const candidateDetailsCollection = require("../candidate_db_collection");
const getCandidateData = require("../candidate_details_db_operations/get_candidate_details");

async function insertCandidateDetails(candidateData) {
  let collection = await candidateDetailsCollection;

  const getParticularCandidateData =
    getCandidateData.getParticularCandidateDetail;

  let userDetailsFromDb = await getParticularCandidateData(candidateData);

  let response = {
    status: 0,
    message: "Candidate created Sucessfully",
    data: candidateData,
  };

  if (Object.keys(userDetailsFromDb).length === 0) {
    let result = await collection.insertOne(userData);

    if (result.acknowledged) {
      return response;
    } else {
      response["status"] = 2;
      response["message"] = "Data Save nhi hua Phir se try kro :) :)";
      return response;
    }
  } else {
    response.status = 1;
    response.message = "Candidate Already exist";

    return response;
  }
}

module.exports = insertCandidateDetails;
