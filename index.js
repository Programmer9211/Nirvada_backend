const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./users_api/create_user_account");

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Working Fine Updated<h1>");
});

app.use("/user", user);

app.listen(process.env.PORT || 3030, () => {
  console.log("Server is running on : http://127.0.0.1:3030");
});
