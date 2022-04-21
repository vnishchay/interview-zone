const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;
const schema = new mongoose.Schema({
    username: {
        type: String,
        unique: false,
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
}
);


schema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

schema.methods.addUsername = async function () {
    return bcrypt.hash(this.password.substr(4), 6);
}

schema.methods.CheckPass = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};


module.exports = mongoose.model("User", schema, 'User Model');