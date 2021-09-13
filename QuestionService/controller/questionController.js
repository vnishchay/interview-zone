const questionDatabase = require("./models/questionModel.js");

exports.savingQuestion = async (req,res)=>{
    await questionDatabase.save(req.body);
    return res.json(201).json({
        success : true ,
        message : "Question Added To Database"
    });
}
