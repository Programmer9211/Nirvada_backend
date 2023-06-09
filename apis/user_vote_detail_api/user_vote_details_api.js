const express = require("express");
const router = express.Router();
const getUserVoteDetails = require("../../mongo_db/users_vote_details/users_vote_details_collection/get_details");
const inserUserVoteDetail = require("../../mongo_db/users_vote_details/users_vote_details_collection/insert_details");
const deleteUserVoteDetails = require("../../mongo_db/users_vote_details/users_vote_details_collection/delete_details");

router.get("/get", async (req, res) => {
  let allUserVoteDetails = await getUserVoteDetails.getAllCandidateDetail();

  res.send({
    status: 0,
    data: allUserVoteDetails,
  });
});

router.post("/insert", async (req, res) => {
  let allUserVoteDetails = await inserUserVoteDetail(req.body);

  res.send(allUserVoteDetails);
});

router.post("/delete", async (req, res) => {
  let allUserVoteDetails = await deleteUserVoteDetails(req.body.id);

  res.send(allUserVoteDetails);
});

module.exports = router;
