const express = require("express");
const router = express.Router();
const insertCandidateDetails = require("../../mongo_db/candidate_details_db/candidate_details_db_operations/insert_cadidate_details");
const getCandidateDetails = require("../../mongo_db/candidate_details_db/candidate_details_db_operations/get_candidate_details");
const updateCandidateDetails = require("../../mongo_db/candidate_details_db/candidate_details_db_operations/update_caandidate_details");
const deleteCandidateDetails = require("../../mongo_db/candidate_details_db/candidate_details_db_operations/delete_cadidate_details");

router.post("/insert", async (req, res) => {
  let response = await insertCandidateDetails(req.body);

  res.send(response);
});

router.post("/get_all_candidates", async (req, res) => {
  const getAllCandidatesCollection =
    getCandidateDetails.getParticularCandidateDetail;

  const getAllCandidateDetails = await getAllCandidatesCollection(
    req.body.booth
  );

  res.send({
    status: 0,
    message: "Sucess",
    data: getAllCandidateDetails,
  });
});

router.get("/get", async (req, res) => {
  const getAllCandidatesCollection = getCandidateDetails.getAllCandidateDetail;

  const getAllCandidateDetails = await getAllCandidatesCollection();

  res.send({
    status: 0,
    message: "Sucess",
    data: getAllCandidateDetails,
  });
});

router.post("/update", async (req, res) => {
  let response = await updateCandidateDetails(req.body);

  res.send(response);
});

router.post("/delete", async (req, res) => {
  let response = await deleteCandidateDetails(req.body.id);

  res.send(response);
});

module.exports = router;
