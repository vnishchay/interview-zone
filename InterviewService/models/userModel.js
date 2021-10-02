const mongoose = require("mongoose");
const moment = require("moment");
const date = `${moment().format("DD/MM/YYYY").split("/")[0]}-${moment().format("DD/MM/YYYY").split("/")[1]}-${moment().format("DD/MM/YYYY").split("/")[2]}`

const schema = new mongoose.Schema({
    username : {
        type : String ,
        unique : true,
        required : true
    },
    normalName : String ,
    country :{
        type: String ,
    } , 
    language : String ,
    email : {
        type: String, 
      required : true,  
    }, 
    ratings : Number ,
    password : {
        type : String ,
        required : true
    },
    dateOfJoining : {
        type : String ,
        default : date
    },
    numberOfInterviews : {
        totalInterviews : Number ,
        totalNumberAsInterviewer : Number ,
        totalNumberAsInterviewee : Number ,
        totalNumberAsCo : Number
    }
});
module.exports = mongoose.model("user",schema);