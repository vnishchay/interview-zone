const authDatabase = require("../models/authModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel"); 
const dotEnv = require("dotenv");

exports.userAddition = async (req,res)=>{
    if(req.body.password === null || req.body.username === null || req.body.email == null || req.body.userName === null) res.status(403).json({data : "all empty"}) 
    console.log(req.body)
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password , salt);
    var  auth = userModel(req.body)
    await auth.save(); 

    return res.status(201).json({
        status : "Passed",
        Message : "User Registered"
    })
}

exports.userLogin = async (req,res)=>{
    console.log(req.body); 
    console.log(process.env.TOKEN_KEY)
    console.log("hello there");
    const userFound  = await userModel.findOne({username : req.body.username});

    if(!userFound) return res.status(400).json({
        status : "Failed",
        message : "User Not Found",
        successfulLogin : false
    });
    const validatePassword = await bcrypt.compare(req.body.password , userFound.password);
    if(!validatePassword) return res.status(400).json({
        status : "Failed",
        message : "Incorrect Password",
        successfulLogin : false
    });
    console.log(validatePassword)
    const token = await jwt.sign({
            userID : userFound._id ,
            username : userFound.username
    }, `${process.env.TOKEN_KEY}` ,
        {expiresIn: "24h"}
    );
    console.log(token) ; 
    res.status(200).json({
        jwt : token ,
        successfulLogin : true
    });
}


exports.authstatus = async (req, res)=>{
       console.log("auth status is called for sure")
       res.status(200).json({
           authorized : true , 
       })
}