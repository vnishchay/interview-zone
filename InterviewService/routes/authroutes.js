
const express = require("express");
const router = express.Router();
const { savingUser } = require("../controller/userController");
const verifyToken = require("../middleware/auth.js");
const { userAddition, userLogin } = require('../controller/authController')



router.route("/signup").post(userAddition);
router.route("/login").post(userLogin);
router.route("/addUser").post(verifyToken, savingUser);


module.exports = router