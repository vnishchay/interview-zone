const interviewDatabase = require("../models/interviewModel");
const {verifyToken} = require("../middleware/auth")
exports.savingInterviewDetails = async (req,res, verifyToken)=>{
    await interviewDatabase.save(req.body);
    return res.json(201).json({
        success : true ,
        message : "Interview Details Added To Database"
    });
}
