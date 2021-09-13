const userDatabase = require("./models/userModel.js");

exports.savingUser = async (req,res)=>{
    await userDatabase.save(req.body);
    return res.json(201).json({
        success : true ,
        message : "User Added To Database"
    });
}
