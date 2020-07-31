const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const db = require("./config/mongoose");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server");
    return;
  }
  console.log("Server is running successfully");
});
