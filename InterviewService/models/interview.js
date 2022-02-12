const mongoose = require("mongoose");

const InterviewProblems = new mongoose.Schema({
    questions: {
        type: [QuestionSchema],
        required: false
    },
    questionsLevel: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model("question", QuestionSchema);