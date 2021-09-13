const authDatabase = require("./models/authModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.userAddition = async (req,res)=>{

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password , salt);

    await authDatabase.save();

    return res.status(201).json({
        status : "Passed",
        Message : "User Registered"
    })
}

exports.userLogin = async (req,res)=>{
    const userFound  = await authDatabase.findOne({username : req.body.username});

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
    const token = await jwt.sign({
            userID : userFound._id ,
            userName : userFound.username
    },"key",
        {expiresIn: "24h"}
    );
     return  res.status(200).json({
        jwt : token ,
        successfulLogin : true
    });
}
