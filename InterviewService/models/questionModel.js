const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
let idValidator = require('mongoose-id-validator');

const Schema = mongoose.Schema;
const schema = new Schema(
    {
        questionTitle: {
            type: String,
            required: true,
            // ref: 'questionTitle'

        },
        questionCategory: {
            type: Schema.Types.ObjectId,
            required: false,
            // ref: 'questionCategory'
        },
        questionLevel: {
            type: String,
            required: true,
            // ref: 'questionLevel'
        },
        questionExample: {
            type: String,
            // ref: 'questionExample'
        },

        questionOutput: {
            type: String,
            required: true,
            // ref: 'questionOutput'
        },

        bestSolution: {
            type: String,
            required: false,
            // ref: 'bestSolution'
        },
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    }
);


schema.pre('save', async function (next) {
    this.isDeleted = false;
    this.isActive = true;
    next();
});

schema.pre('insertMany', async function (next, docs) {
    if (docs && docs.length) {
        for (let index = 0; index < docs.length; index++) {
            const element = docs[index];
            element.isDeleted = false;
            element.isActive = true;
        }
    }
    next();
});

schema.method('toJSON', function () {
    const {
        _id, __v, ...object
    } = this.toObject({ virtuals: true });
    object.id = _id;

    return object;
});
schema.plugin(mongoosePaginate);
schema.plugin(idValidator);

const Question = mongoose.model('question', schema);
module.exports = Question;
