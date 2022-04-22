const userDatabase = require("../models/userModel.js");
const argon2 = require('argon2');
const userModel = require("../models/userModel.js");
const bson = require('bson')

exports.savingUser = async (req, res) => {
    req.body.password = await argon2.hash(req.body.password);
    const user = new userDatabase({
        username: req.body.username,
        password: req.body.password
    })
    const data = req.body;
    await user.save((err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.status(201).json({
                success: true,
                message: "User Added To Database",
                data: req.body
            });
        }
    })
}

exports.getprofile = async (req, res) => {
    try {
        const { id } = req.user;
        const user = await userModel.findById(bson.ObjectID(id));
        return res.status(200).json({
            user: user,
            status: '200'
        })
    }
    catch (e) {
        const userDatabase = require("../models/userModel.js");
        const argon2 = require('argon2');
        const userModel = require("../models/userModel.js");
        const bson = require('bson')

        exports.savingUser = async (req, res) => {
            req.body.password = await argon2.hash(req.body.password);
            const user = new userDatabase({
                username: req.body.username,
                password: req.body.password
            })
            const data = req.body;
            await user.save((err, data) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.status(201).json({
                        success: true,
                        message: "User Added To Database",
                        data: req.body
                    });
                }
            })
        }

        exports.getprofile = async (req, res) => {
            try {
                const { id } = req.user;
                const user = await userModel.findById(bson.ObjectID(id));
                return res.status(200).json({
                    user: user,
                    status: '200'
                })
            }
            catch (e) {
                res.status(400).json({
                    message: e.message,
                    status: 'fail'
                })
            }
        }


        // find peers 
        res.status(400).json({
            message: e.message,
            status: 'fail'
        })
    }
}


// find peers 