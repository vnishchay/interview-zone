const express = require("express");
const router = express.Router();
const {savingUser} = require("./controller/userController");

router.route("/addUser")
    .post(savingUser);

module.exports = router;