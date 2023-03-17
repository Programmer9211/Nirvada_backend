const electionCollection = require("../election_details_db_collection");

async function insertElectionDetails(electionData) {
  let collection = await electionCollection;

  let response = {
    status: 0,
    message: "Election created Sucessfully",
    data: electionData,
  };

  let result = await collection.insertOne(electionData);

  if (result.acknowledged) {
    return response;
  } else {
    response["status"] = 2;
    response["message"] = "Unable to save data, please try again";
    return response;
  }
}

module.exports = insertElectionDetails;
