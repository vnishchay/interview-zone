const mongoose = require("mongoose");
const moment = require("moment");
const date = `${moment().format("DD/MM/YYYY").split("/")[0]}-${moment().format("DD/MM/YYYY").split("/")[1]}-${moment().format("DD/MM/YYYY").split("/")[2]}`

const schema = new mongoose.Schema({
    question : {
        type : String ,
        required : true
    },
    questionCategory : {
        type : String ,
        required : true
    },
    questionLevel : {
        type : String ,
        required : true
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
        required : true
    }
});
module.exports = mongoose.model("question",schema);