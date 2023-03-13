const candidateDetailCollections = require("../candidate_db_collection");

async function getParticularCandidateDetails(candidateId) {
  const result = await candidateDetailCollections;
    const candidateData = await result
        .find({ data: candidateId })
        .toArray();
    return candidateData;
}

async function getAllCandidateDetails() {
  const result = await candidateDetailCollections;
    const candidateData = await result
        .find()
        .toArray();
    return candidateData;
}

module.exports = {
  getParticularCandidateDetail: getParticularCandidateDetails,
  getAllCandidateDetail: getAllCandidateDetails,
};
