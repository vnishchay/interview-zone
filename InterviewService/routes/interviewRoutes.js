const express = require("express");
const router = express.Router();
const {savingInterviewDetails} = require("../controller/interviewController");

const {savingQuestion, getQuestions} = require("../controller/questionController");

const {userAddition,userLogin} = require("../controller/authController");

const {savingUser} = require("../controller/userController");
const {auth}  = require("../middleware/auth")

router.route("/signup")
    .post(userAddition);

router.route("/login")
    .post(userLogin);



router.route("/addUser")
        .post(savingUser);


router.route("/addquestion").post( savingQuestion);
router.route("/getquestion").post( getQuestions);


router.route("/addInterviewDetails")
    .post(savingInterviewDetails);

module.exports = router;