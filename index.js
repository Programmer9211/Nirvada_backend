const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./apis/users_api/create_user_account");
const candidateDetails = require("./apis/candidate_api/candidate_api");
const userVoteDetails = require("./apis/user_vote_detail_api/user_vote_details_api");
const electionDetails = require("./apis/election_api/election_api");
const smsSend = require("./sms_send/sms_send");
const voteCasting = require("./apis/vote_casting_api/vote_casting_api");

app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Working Fine<h1>");
});

app.use("/user", user);

app.use("/candidate_details", candidateDetails);

app.use("/user_vote_details", userVoteDetails);

app.use("/election_details", electionDetails);

app.use("/sms", smsSend);

app.use("/vote_casting", voteCasting);

app.listen(process.env.PORT || 3030, () => {
  console.log("Server is running on : http://127.0.0.1:3030");
});
