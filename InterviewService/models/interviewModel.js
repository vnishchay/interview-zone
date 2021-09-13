const mongoose = require("mongoose");
const moment = require("moment");
const date = `${moment().format("DD/MM/YYYY").split("/")[0]}-${moment().format("DD/MM/YYYY").split("/")[1]}-${moment().format("DD/MM/YYYY").split("/")[2]}`

const schema = new mongoose.Schema({
    typeOfInterview : {
        type : String ,
        required : true
    },
    numberOfQuestions : {
        type : String ,
        required : true
    },
    levelOfQuestions : {
        type : String ,
        default : "EASY"
    },
    questions : {
        type : Array
    },
    idOfOrganiser : {
        type : String ,
        required : true
    },
    idOfParticipant : {
        type : String ,
        required : true
    },
    dateOfInterview : {
        type : String ,
        default : date
    }
});
module.exports = mongoose.model("interview",schema);