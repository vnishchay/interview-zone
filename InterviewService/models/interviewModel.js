const Question = require("./questionModel")
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const schema = new Schema({
    typeOfInterview: {
        type: String,
        required: false,
        ref: 'typeOfInterview'
    },
    numberOfQuestions: {
        type: String,
        required: false
        ,
        ref: 'numberOfQuestions'
    },
    levelOfQuestions: {
        type: String,
        default: "EASY",
        ref: 'levelOfQuestions'
    },
    questions: {
        type: [{ type: Schema.Types.ObjectId }],
        ref: 'questions'

    },
    idOfHost: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'host'
    },
    idOfParticipant: {
        type: Schema.Types.ObjectId,
        ref: 'participant'
    },
    interviewID: {
        type: String
    }
}
);

schema.method('toJSON', function () {
    const {
        _id, __v, ...object
    } = this.toObject({ virtuals: true });
    object.id = _id;

    return object;
});

const InterviewModel = mongoose.model("interview", schema);

module.exports = InterviewModel;



