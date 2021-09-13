const express = require("express");
const router = express.Router();
const {questionDatabase} = require("./controller/interviewController");

router.route("/addUser")
    .post(questionDatabase);

module.exports = router;