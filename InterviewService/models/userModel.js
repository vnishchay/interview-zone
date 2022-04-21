const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: false
    },
    normalName: String,
    country: {
        type: String,
    },
    language: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    ratings: Number,
    password: {
        type: String,
        required: true
    },
    dateOfJoining: {
        type: String,
    },
    numberOfInterviews: {
        type: [Schema.Types.ObjectID]
    }
});
module.exports = mongoose.model("user", schema);