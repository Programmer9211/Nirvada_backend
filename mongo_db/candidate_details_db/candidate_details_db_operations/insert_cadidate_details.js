const candidateDetailsCollection = require("../candidate_db_collection");

async function insertCandidatesDetails(candidatesData) {
  let collection = await candidateDetailsCollection;

  let response = {
    status: 0,
    message: "Candidate created Sucessfully",
    data: candidatesData,
  };

  let result = await collection.insertMany(candidatesData);

  if (result.acknowledged) {
    return response;
  } else {
    response["status"] = 2;
    response["message"] = "Unable to save Data, Please try again";
    return response;
  }
}

module.exports = insertCandidatesDetails;
