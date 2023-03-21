const accountSid = "ACb64db9089f8f78776cf83c494e28c196";
const authToken = "24c7b241bb70548ee64ce3c20f67e03a";
const client = require("twilio")(accountSid, authToken);
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const getAllUsers = require("../mongo_db/users_vote_details/users_vote_details_collection/get_details")

router.post("/send", (req, res) => {
  client.messages
    .create({
      body: req.body.text,
      from: "+16602855240",
      to: req.body.mobile_number,
    })
    .then((message) => res.send(message));
});

router.get("/send_login_details", async (req, res) => {

  const userFunction = getAllUsers.getAllCandidateDetail;

  let users = await userFunction();

  const myArray = users;

  for (let i = 0; i < myArray.length; i++) {
    const randomString = generateRandomString(10);
    console.log(randomString); // Example output: "e8ca3b3d12"

    const authId = myArray[i]["voter_id_number"];

    const reversedString = authId.split("").reverse().join("");

    await client.messages
      .create({
        body:
          "Your Credentials are Auth Id: " +
          reversedString +
          "and password" +
          myArray[i]["phone_number"],
        from: "+16602855240",
        to: myArray[i]["phone_number"],
      })
      .then((message) => console.log(message));
  }
});

function generateRandomString(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

module.exports = router;
