const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config()

const connection = async () => {
    await mongoose.connect('mongodb+srv://nishi:1BiIdsSOgboS6OwP@cluster0.zjfve.mongodb.net/interview', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connection;


