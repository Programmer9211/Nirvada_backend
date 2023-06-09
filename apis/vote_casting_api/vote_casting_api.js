const express = require("express");
const router = express.Router();
const cadidateDetails = require("../../mongo_db/candidate_details_db/candidate_db_collection");
const votingDetails = require("../../mongo_db/users_vote_details/users_vote_details_collection/update_details");
const getCandidateDetails = require("../../mongo_db/candidate_details_db/candidate_details_db_operations/get_candidate_details");

router.post("/insert", async (req, res) => {
  const collection = await cadidateDetails;

  const getVoteCount = await getCandidateDetails.getParticularCandidateWithId(
    req.body.candidate_id
  );

  let voteCount = getVoteCount[0]["candidate_vote_count"];

  voteCount = voteCount + 1;

  console.log(getVoteCount);

  console.log(voteCount);

  console.log(req.body.candidate_id);

  const filter = { candidate_id: req.body.candidate_id };
  const update = { $set: { candidate_vote_count: voteCount } };

  const result = await collection.findOneAndUpdate(filter, update);

  console.log(result);

  const updateUserVotingStatus = await votingDetails(req.body.voter_id_number);

  res.send({
    data: {
      update_result: result,
      voting_status: updateUserVotingStatus,
    },
  });
});

module.exports = router;
