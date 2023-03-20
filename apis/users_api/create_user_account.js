const express = require("express");
const router = express.Router();
const insertUserDetails = require("../../mongo_db/users_db/user_db_operations/insert_user_data");
const getUserDetails = require("../../mongo_db/users_db/user_db_operations/get_user");
const checkIfAlreadyVoted = require("../../mongo_db/users_vote_details/users_vote_details_collection/get_details");
const getElectionDetails = require("../../mongo_db/election_details_db/election_db_operations.js/get_election_details");
const getAllUsersDetails = require("../../mongo_db/users_db/user_db_operations/get_all_users");

// For Login user

router.post("/login", async (req, res) => {
  let voterIdNumber = req.body.voter_id_number;
  let mobileNumber = req.body.mobile_number;

  let result = await getUserDetails(voterIdNumber);
  console.log("Result : ", result);

  let response = {
    status: 0,
    message: "Login Sucessfull",
    data: {
      name: "",
      voter_id_number: voterIdNumber,
      mobileNumber: mobileNumber,
    },
  };
  if (Object.keys(result).length === 0) {
    response.status = 2;
    response.message = "Account doesn't exist";
    res.send(response);
  } else if (
    result[0]["voter_id_number"] == voterIdNumber &&
    result[0]["mobileNumber"] == mobileNumber
  ) {
    const check = checkIfAlreadyVoted;

    const result = await check.getParticularCandidateDetail(voterIdNumber);

    if (result[0]["is_vote_casted"] == true) {
      response.status = 2;
      response.message = "You have already casted voted";
    }

    res.send(response);
  } else {
    response.status = 1;

    response.message = "Something went wrong";

    res.send(response);
  }
});

// For account creation.

router.post("/signup", async (req, res) => {
  // let voterIdNumber = req.body.voter_id_number;
  // let mobileNumber = req.body.mobile_number;

  // let result = await getUserDetails(voterIdNumber);
  // console.log("Result : ", result);

  // let response = {
  //   status: 0,
  //   message: "Account Created Sucessfully",
  //   data: {
  //     voter_id_number: voterIdNumber,
  //     mobileNumber: mobileNumber,
  //   },
  //   election_details: {},
  // };
  // if (Object.keys(result).length === 0) {
  let response = await insertUserDetails(req.body);

  //   const check = checkIfAlreadyVoted;

  //   const result = await check.getParticularCandidateDetail(voterIdNumber);

  // if (Object.keys(result) === 0) {
  //   res.send(response);
  // } else {
  //   if (result[0]["is_vote_casted"] == true) {
  //     response.status = 2;
  //     response.message = "You have already casted voted";
  //   } else {
  //     const election = getElectionDetails.getElectionDetailsWithBooth;

  //     let electionDetails = await election(result[0]["booth"]);

  //     console.log(result);

  //     response.data = electionDetails;
  //   }
  // }

  //   res.send(response);
  // } else if (
  //   result[0]["voter_id_number"] == voterIdNumber ||
  //   result[0]["mobileNumber"] == mobileNumber
  // ) {
  //   response.status = 1;
  //   response.message = "Account Already exist";

  //   const check = checkIfAlreadyVoted;

  //   const result = await check.getParticularCandidateDetail(voterIdNumber);

  // if (Object.keys(result) === 0) {
  //   res.send(response);
  // } else {
  //   if (result[0]["is_vote_casted"] == true) {
  //     response.status = 2;
  //     response.message = "You have already casted voted";
  //   } else {
  //     const election = getElectionDetails.getElectionDetailsWithBooth;

  //     let electionDetails = await election(result[0]["booth"]);

  //     console.log(electionDetails);

  //     response.data = electionDetails;
  //   }
  // }

  //   response.election_details = result;

  //   res.send(response);
  // } else {
  //   response.status = 1;

  //   response.message = "Something went wrong";

  res.send(response);
  // }
});

// For updating user Details.

// router.post("/update", verifyToken, async (req, res) => {
//   let response = await updateUserDetails(req.body);

//   res.send(response);
// });

// For deleting User.

router.get("/get", async (req, res) => {
  let allUsers = await getAllUsersDetails();

  res.send({ status: 0, data: allUsers });
});

module.exports = router;
