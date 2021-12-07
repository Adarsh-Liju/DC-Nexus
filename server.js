const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port=5000;
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://adarsh:ala@cluster0.w4nwc.mongodb.net/web-tech"); 
const feedback = {
  firstName: String,
  lastName: String,
  email: String,
  tel: Number,
  query: String,
};
const NewFeedback = mongoose.model("form", feedback);


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/feedbackform.html");
});

app.post("/", function (req, res) {
  let newdoc = new NewFeedback({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tel: req.body.tel,
    query: req.body.query,
  });
  newdoc.save();
  res.redirect("/");
});

app.listen(port, function () {
  console.log("Server is Running at ",port);
});