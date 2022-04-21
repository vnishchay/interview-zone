const express = require('express');
const { route } = require('.');
const router = express.Router();
const userController = require('../controller/userController')
const authController = require('../controller/authController')

router.use(authController.protect)
router.route("/user/profile", userController.getprofile);
// router.route("/user/add")

module.exports = router