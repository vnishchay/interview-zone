const userDatabase = require("../models/userModel.js");
const argon2 = require('argon2')

exports.savingUser = async (req,res)=>{
    req.body.password = await argon2.hash(req.body.password);
    const user =new userDatabase({
        username : req.body.username,
        password : req.body.password
    } )  
    const data = req.body; 
    await user.save((err, data)=>{
         if(err){
                 console.log(err)
         }
         else {
            res.send({
                success : true ,
                message : "User Added To Database", 
                data : req.body
            }); 
         }
    })
}
