const express = require("express");
const { authstatus } = require("../controller/authController");
const router = express.Router();
const { savingInterviewDetails } = require("../controller/interviewController");
const { userAddition, userLogin } = require("../controller/authController");
const {
  savingQuestion,
  getQuestions,
} = require("../controller/questionController");
const { savingUser } = require("../controller/userController");
const { webscrapping } = require("../controller/webscraping");
const verifyToken = require("../middleware/auth.js");

// auth routes
router.route("/signup").post(userAddition);

router.route("/login").post(userLogin);
router.route("/authstatus").post(verifyToken, authstatus);

// ?
router.route("/addUser").post(verifyToken, savingUser);
router.route("/addquestion").post(verifyToken, savingQuestion);
// route to get question
router.route("/getquestion").post(verifyToken, getQuestions);
// webscraping route
router.route("/scrap").get(verifyToken, webscrapping);

//interview details adding route
router.route("/addInterviewDetails").post(verifyToken, savingInterviewDetails);

module.exports = router;
