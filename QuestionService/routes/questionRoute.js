const express = require("express");
const router = express.Router();
const {savingQuestion, getQuestions} = require("../controller/questionController");
router.route("/addquestion").post(savingQuestion);
router.route("/getque").post(getQuestions);
module.exports = router;