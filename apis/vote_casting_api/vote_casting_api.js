const express = require("express");
const router = express.Router();
const cadidateDetails = require("../../mongo_db/candidate_details_db/candidate_db_collection");
const votingDetails = require("../../mongo_db/users_vote_details/users_vote_details_collection/update_details");

router.post("/insert", async (req, res) => {

  const filter = { id: req.body.candidate_id };
  const update = { $inc: { vote_count: 1 } };

  const collection = await cadidateDetails;

  const result = await collection.findOneAndUpdate(filter, update);

  const updateUserVotingStatus = await votingDetails(req.body.voter_id_number);

  res.send(updateUserVotingStatus);
});

module.exports = router;
