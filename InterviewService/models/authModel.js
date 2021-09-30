const mongoose = require("mongoose");

const Auth = new mongoose.Schema({
    username : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    }
});
const AuthModel = mongoose.model("authDetails",Auth);
module.exports = AuthModel; 


