const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    }
});
module.exports = mongoose.model("authDetails",schema);