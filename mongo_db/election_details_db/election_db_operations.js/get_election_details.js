const userVoteDetailsCollection = require("../election_details_db_collection");

async function getElectionDetailsWithId(electionId) {
  const result = await userVoteDetailsCollection;
  const electionData = await result
    .find({
      election_id: electionId,
    })
    .toArray();
  return electionData;
}

async function getElectionDetailsWithBooth(location) {
  // Location = "haryana/gurgaon";
  const result = await userVoteDetailsCollection;
  const electionData = await result
    .find({
      "election_booth.location": location,
    })
    .toArray();
  return electionData;
}

async function getAllElectionDetails() {
  const result = await electionDetailsCollection;
  const electionData = await result.find().toArray();
  return electionData;
}

module.exports = {
  getElectionDetailsWithId: getElectionDetailsWithId,
  getAllCandidateDetail: getAllElectionDetails,
  getElectionDetailsWithBooth: getElectionDetailsWithBooth,
};
