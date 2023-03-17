const accountSid = "ACb64db9089f8f78776cf83c494e28c196";
const authToken = "24c7b241bb70548ee64ce3c20f67e03a";
const client = require("twilio")(accountSid, authToken);
const express = require("express");
const router = express.Router();

router.post("/send", (req, res) => {
  client.messages
    .create({
      body: req.body.text,
      from: "+16602855240",
      to: req.body.mobile_number,
    })
    .then((message) => res.send(message));
});

module.exports = router;
