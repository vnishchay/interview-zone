const express = require("express");
const router = express.Router();
const interview = require("../controller/interviewController");
const verifyToken = require("../middleware/auth.js");


router.route("/interview/get").post(verifyToken, interview.findAllinterview);

router.route("/interview/create").post(interview.addInterview);

router.route("/interview/update/:id").patch(verifyToken, interview.updateinterview);

module.exports = router;

