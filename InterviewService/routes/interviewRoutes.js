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

const verifyToken = require("../middleware/auth.js");


router.route("/signup").post(userAddition);
router.route("/login").post(userLogin);
router.route("/authstatus").post(verifyToken, authstatus);
router.route("/addUser").post(verifyToken, savingUser);
router.route("/addquestion").post(verifyToken, savingQuestion);
router.route("/getquestion").post(verifyToken, getQuestions);
router.route("/addInterviewDetails").post(verifyToken, savingInterviewDetails);

module.exports = router;
