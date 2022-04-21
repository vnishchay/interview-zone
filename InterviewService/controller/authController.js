
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const dotEnv = require("dotenv");

exports.userAddition = async (req, res) => {
    const userFound = await userModel.findOne({ email: req.body.email });
    if (userFound) {
        return res.status(400).json({
            message: "user exists"
        })
    }
    if (req.body.password === null || req.body.email === null) res.status(403).json({ data: "all empty" })
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    var auth = userModel(req.body)
    await auth.save();
    return res.status(201).json({
        status: "Passed",
        Message: "User Registered"
    })
}

exports.userLogin = async (req, res) => {
    try {
        const userFound = await userModel.findOne({ email: req.body.email });
        if (!userFound) return res.status(400).json({
            status: "Failed",
            message: "User Not Found",
            successfulLogin: false
        });
        const validatePassword = await bcrypt.compare(req.body.password, userFound.password);
        if (!validatePassword) return res.status(400).json({
            status: "Failed",
            message: "Incorrect Password",
            successfulLogin: false
        });
        const token = await jwt.sign({
            userID: userFound._id,
            email: userFound.email
        }, `${process.env.TOKEN_KEY}`,
            { expiresIn: "24h" }
        );
        res.status(200).json({
            email: userFound.email,
            jwt: token,
            successfulLogin: true

        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}
