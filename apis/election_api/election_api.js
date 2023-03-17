const express = require("express");
const router = express.Router();
const insertElectionDetails = require("../../mongo_db/election_details_db/election_db_operations.js/insert_election_details");
const insertCandidateDetails = require("../../mongo_db/candidate_details_db/candidate_details_db_operations/insert_cadidate_details");

router.post("/insert", async (req, res) => {
  let response = await insertElectionDetails(req.body.election_data);

  let candidateResponse = await insertCandidateDetails(req.body.candidate_data);

  res.send(response);
});

module.exports = router;
