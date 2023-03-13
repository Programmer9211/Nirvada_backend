const express = require("express");
const router = express.Router();
const insertUserDetails = require("../mongo_db/users_db/user_db_operations/insert_user_data");
const getUserDetails = require("../mongo_db/users_db/user_db_operations/get_user");

// For Login user

router.post("/login", async (req, res) => {
  let voterIdNumber = req.body.voter_id_number;
  let mobileNumber = req.body.mobile_number;

  let result = await getUserDetails(voterIdNumber);
  console.log("Result : ", result);

  let response = {
    status: 0,
    message: "Shabbash, Ho gya Login",
    data: {
      name: "",
      voter_id_number: voterIdNumber,
      mobileNumber: mobileNumber,
    },
  };
  if (Object.keys(result).length === 0) {
    response.status = 2;
    response.message = "Pahele account banaye sir";
    res.send(response);
  } else if (
    result[0]["voter_id_number"] == voterIdNumber &&
    result[0]["mobileNumber"] == mobileNumber
  ) {
    res.send(response);
  } else {
    response.status = 1;

    response.message =
      "voter_id_number Ya mobileNumber M Se Kuch Toh Galat h, Kya kr rhe h bhai ? shi Details Daal Na...";

    res.send(response);
  }
});

// For account creation.

router.post("/signup", async (req, res) => {
  let response = await insertUserDetails(req.body);

//   if (response.status == 0) {
//     let voter_id_number = req.body.voter_id_number;
//     let mobileNumber = req.body.mobile_number;

//     const userdata = {
//       voter_id_number: voter_id_number,
//       mobileNumber: mobileNumber,
//     };
//   }

  res.send(response);
});

// For updating user Details.

// router.post("/update", verifyToken, async (req, res) => {
//   let response = await updateUserDetails(req.body);

//   res.send(response);
// });

// For deleting User.

module.exports = router;
