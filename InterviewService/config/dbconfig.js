const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config()

const connection = async () => {
    await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connection;


