const mongoose = require("mongoose");
const moment = require("moment");
const date = `${moment().format("DD/MM/YYYY").split("/")[0]}-${moment().format("DD/MM/YYYY").split("/")[1]}-${moment().format("DD/MM/YYYY").split("/")[2]}`

const QuestionSchema = new mongoose.Schema({
    question : {
        type : String ,
        required : true
    },
    questionCategory : {
        type : String ,
        required : false
    },
    questionLevel : {
        type : String ,
        required : true
    },
    questionExample : {
        type : String, 
    }, 
    questionOutput : {
        type : String ,
        required : true
    },
    dateOfQuestionAddition : {
        default : date ,
        type : String
    },
    bestSolution : {
        type : String ,
        required : false, 
    }
});
module.exports = mongoose.model("question",QuestionSchema);