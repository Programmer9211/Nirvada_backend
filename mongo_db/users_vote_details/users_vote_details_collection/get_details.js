const userVoteDetailsCollection = require("../user_vote_details_collection");

async function getParticularCandidateDetails(voterId) {
  const result = await userVoteDetailsCollection;
  const userVoteData = await result
    .find({ voter_id_number: voterId })
    .toArray();
  return userVoteData;
}

async function getAllCandidateDetails() {
  const result = await userVoteDetailsCollection;
  const userVoteData = await result.find().toArray();
  return userVoteData;
}

module.exports = {
  getParticularCandidateDetail: getParticularCandidateDetails,
  getAllCandidateDetail: getAllCandidateDetails,
};
