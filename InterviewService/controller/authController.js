
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const dotEnv = require("dotenv");

exports.userAddition = async (req, res) => {
    try {
        console.log(req.body)
        const userFound = await userModel.findOne({ username: req.body.username });
        if (userFound) {
            return res.status(400).json({
                message: "user exists"
            })
        }
        if (req.body.password === null || req.body.username === null) res.status(403).json({ data: "all empty" })
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        var auth = userModel(req.body)
        await auth.save();
        return res.status(201).json({
            status: "Passed",
            Message: "User Registered"
        })
    } catch (err) {
        res.status(400).json({
            message: err.message,
            status: 'fail'
        })
    }
}

exports.userLogin = async (req, res) => {
    const userFound = await userModel.findOne({ username: req.body.username });
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
        username: userFound.username
    }, `${process.env.TOKEN_KEY}`,
        { expiresIn: "24h" }
    );
    res.status(200).json({
        username: userFound.username,
        jwt: token,
        userid: userFound.id,
        successfulLogin: true
    });
}
