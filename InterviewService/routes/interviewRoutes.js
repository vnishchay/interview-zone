const express = require("express");
const router = express.Router();
const {savingInterviewDetails} = require("../controller/interviewController");

router.route("/addInterviewDetails")
    .post(savingInterviewDetails);

module.exports = router;