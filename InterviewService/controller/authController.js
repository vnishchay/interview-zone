
const bcrypt = require("bcryptjs");
const createError = require('http-errors');
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const dotEnv = require("dotenv");
const validator = require('validator')

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
};

const createSendToken = (user, id, statusCode, req, res) => {
    const token = signToken(id);
    const name = user.firstName + ' ' + user.lastName;
    let data = { name, role: user.role };
    res.status(statusCode).json({
        statusCode,
        token,
        data,
    });
};

exports.userAddition = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email + password)
        if (!email || !password) { return next(createError(500, 'email or passowrd required')); }
        // add a validator to check if input is actually a email 
        const userFound = await userModel.findOne({ email: email });
        if (userFound) {
            return res.status(400).json({
                status: 'fail',
            })
        }
        const newUser = await userModel.create({
            email: email,
            password: password
        })
        createSendToken(newUser, newUser._id, 201, req, res);
    }
    catch (err) {
        return next(createError(400, err.message));
    }
}

exports.userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return next(createError(500, 'email or password required'))

        if (validator.isEmail(email)) {
            const user = await userModel.findOne({ email: email }).select('+password');

            if (user && user.CheckPass(password, user.password)) {
                createSendToken(user, user._id, 200, req, res);
            } else {
                return next(createError(400, 'email or passowrd is not correct'))
            }
        } else {
            return res.status(400).json({
                statusCode: 400,
                message: 'Invalid Email Found'
            })
        }
    } catch (err) {
        return next(new Error(err))
    }
}


exports.protect = async (req, res, next) => {
    try {
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token || token === 'null') {
            return next(
                createError(401, 'You are not logged in! Please log in to get access.')
            );
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const currentUser = await userModel.findById(decoded.id);

        if (!currentUser) {
            return next(
                createError(401, 'The user belonging to this token does no longer exist.')
            );
        }
        req.user = currentUser._id;
        next();
    } catch (err) {
        return next(new Error(err.message));
    }
};
