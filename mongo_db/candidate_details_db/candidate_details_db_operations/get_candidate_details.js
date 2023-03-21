const candidateDetailCollections = require("../candidate_db_collection");

async function getParticularCandidateDetails(candidateBooth) {
  const result = await candidateDetailCollections;
  const candidateData = await result.find({ booth: candidateBooth }).toArray();
  return candidateData;
}
async function getParticularCandidateDetailsWithId(candidateId) {
  const result = await candidateDetailCollections;
  const candidateData = await result.find({ candidate_id: candidateId }).toArray();
  return candidateData;
}

async function getAllCandidateDetails() {
  const result = await candidateDetailCollections;
  const candidateData = await result.find().toArray();
  return candidateData;
}

module.exports = {
  getParticularCandidateDetail: getParticularCandidateDetails,
  getAllCandidateDetail: getAllCandidateDetails,
  getParticularCandidateWithId: getParticularCandidateDetailsWithId,
};
