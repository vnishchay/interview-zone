const express = require("express");
const router = express.Router();
const {userAddition,userLogin} = require("./controller/authController");

router.route("/addition")
    .post(userAddition);

router.route("/login")
    .post(userLogin);


module.exports = router;