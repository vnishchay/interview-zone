const express = require("express");
const router = express.Router();
const {savingInterviewDetails} = require("../controller/interviewController");

const {savingQuestion, getQuestions} = require("../controller/questionController");
const {savingUser} = require("../controller/userController");
const { webscrapping } = require("../controller/webscraping");
const verifyToken  = require("../middleware/auth.js");

router.route("/addUser")
        .post(savingUser);

router.route("/addquestion").post(savingQuestion);
router.route("/getquestion")
    .post(verifyToken, getQuestions);
router.route("/scrap").get(webscrapping); 

router.route("/addInterviewDetails")
    .post(savingInterviewDetails);

module.exports = router;