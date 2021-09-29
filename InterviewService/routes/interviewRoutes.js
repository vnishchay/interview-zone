const express = require("express");
const router = express.Router();
const {savingInterviewDetails} = require("../controller/interviewController");

const {savingQuestion, getQuestions} = require("../controller/questionController");
const {savingUser} = require("../controller/userController");
const { webscrapping } = require("../controller/webscraping");
const verifyToken  = require("../middleware/auth.js");

router.route("/addUser")
        .post(verifyToken, savingUser);
router.route("/addquestion").post(verifyToken, savingQuestion);
router.route("/getquestion")
    .post(verifyToken, getQuestions);
router.route("/scrap").get(verifyToken, webscrapping); 

router.route("/addInterviewDetails")
    .post(verifyToken, savingInterviewDetails);

module.exports = router;