const interviewDatabase = require("../models/interviewModel");

exports.savingInterviewDetails = async (req,res)=>{
    await interviewDatabase.save(req.body);
    return res.json(201).json({
        success : true ,
        message : "Interview Details Added To Database"
    });
}
