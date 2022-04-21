const express = require("express");
const router = express.Router();
const interview = require("../controller/interviewController");
const authController = require('../controller/authController');


router.use(authController.protect)
router.route("/interview/get").post(interview.findAllinterview);
router.route("/interview/create").post(interview.addInterview);
router.route("/interview/update/:id").patch(interview.updateinterview);

module.exports = router;

