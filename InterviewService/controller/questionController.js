/**
 * QuestionController.js
 * @description : exports action methods for Question.
 */

const Question = require('../models/questionModel');
const validation = require('../utils/validateRequest')
const dbService = require('../utils/dbService');
const ObjectID = require('mongodb').ObjectID;
const { requestValidated } = require('../utils/messages');
/**
 * @description : create document of Question in mongodb collection.
 * @param {obj} req : request including body for creating document.
 * @param {obj} res : response of created document
 * @return {obj} : created Question. {status, message, data}
 */
const addQuestion = async (req, res) => {
    console.log(req.body)
    try {
        console.log("??? ")
        let data = new Question({
            ...req.body
        });
        let result = await dbService.createDocument(Question, data);
        return res.ok({ data: result });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.validationError({ message: `Invalid Data, Validation Failed at ${error.message}` });
        }
        if (error.code && error.code == 11000) {
            return res.isDuplicate();
        }
        return res.failureResponse({ data: error.message });
    }
};



/**
 * @description : find all documents of Question from collection based on query and options.
 * @param {obj} req : request including option and query. {query, options : {page, limit, pagination, populate}, isCountOnly}
 * @param {obj} res : response contains data found from collection.
 * @return {obj} : found Question(s). {status, message, data}
 */
const findAllQuestion = async (req, res) => {
    try {
        let options = {};
        let query = {};

        if (typeof req.body.query === 'object' && req.body.query !== null) {
            query = { ...req.body.query };
        }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.countDocument(Question, query);
            return res.ok({ data: { totalRecords } });
        }

        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) {
            options = { ...req.body.options };
        }
        let result = await dbService.getAllDocuments(Question, query, options);
        if (result && result.data && result.data.length) {
            return res.ok({ data: result });
        }
        return res.recordNotFound();
    } catch (error) {
        return res.failureResponse({ data: error.message });
    }
};

/**
 * @description : returns total number of documents of Question.
 * @param {obj} req : request including where object to apply filters in req body 
 * @param {obj} res : response that returns total number of documents.
 * @return {obj} : number of documents. {status, message, data}
 */
const getQuestionCount = async (req, res) => {
    try {
        let where = {};
        let validateRequest = validation.validateFilterWithJoi(
            req.body,
            QuestionSchemaKey.findFilterKeys,
        );
        if (!validateRequest.isValid) {
            return res.inValidParam({ message: `${validateRequest.message}` });
        }
        if (typeof req.body.where === 'object' && req.body.where !== null) {
            where = { ...req.body.where };
        }
        let result = await dbService.countDocument(Question, where);
        result = { totalRecords: result };
        return res.ok({ data: result });
    } catch (error) {
        return res.failureResponse({ data: error.message });
    }
};



const getQuestionByAggregate = async (req, res) => {
    try {
        let result = await dbService.getAllDocuments(Question)
        if (result.length > 0) {
            return res.ok({ data: result })
        }
        return res.recordNotFound();
    } catch (error) {
        return res.failureResponse({ data: error.message });
    }
}

/**
 * @description : delete documents of Question in table by using ids.
 * @param {obj} req : request including array of ids in request body.
 * @param {obj} res : response contains no of documents deleted.
 * @return {obj} : no of documents deleted. {status, message, data}
 */
const deleteManyQuestion = async (req, res) => {
    try {
        let ids = req.body.ids;
        if (!ids || !Array.isArray(ids) || ids.length < 1) {
            return res.badRequest();
        }
        const query = { '_id': { '$in': ids } };
        let result = await dbService.deleteMany(Question, query);
        return res.ok({ data: result });
    } catch (error) {
        return res.failureResponse();
    }
};



/**
 * @description : update document of Question with data by id.
 * @param {obj} req : request including id in request params and data in request body.
 * @param {obj} res : response of updated Question.
 * @return {obj} : updated Question. {status, message, data}
 */
const updateQuestion = async (req, res) => {
    try {
        delete req.body['addedBy'];
        delete req.body['updatedBy'];
        let data = {
            updatedBy: req.user.id,
            ...req.body,
        };
        let validateRequest = validation.validateParamsWithJoi(
            data,
            QuestionSchemaKey.updateSchemaKeys
        );
        if (!validateRequest.isValid) {
            return res.inValidParam({ message: `Invalid values in parameters, ${validateRequest.message}` });
        }
        let query = { _id: req.params.id };
        let result = await dbService.findOneAndUpdateDocument(Question, query, data, { new: true });
        if (!result) {
            return res.recordNotFound();
        }
        return res.ok({ data: result });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.validationError({ message: `Invalid Data, Validation Failed at ${error.message}` });
        }
        else if (error.code && error.code == 11000) {
            return res.isDuplicate();
        }
        return res.failureResponse({ data: error.message });
    }
};

/**
 * @description : find document of Question from table by id;
 * @param {obj} req : request including id in request params.
 * @param {obj} res : response contains document retrieved from table.
 * @return {obj} : found Question. {status, message, data}
 */
const getQuestion = async (req, res) => {
    try {
        let query = {};
        if (!ObjectID.isValid(req.params.id)) {
            return res.invalidObjectId();
        }
        query._id = req.params.id;
        let options = {};
        if (req.body && req.body.populate && req.body.populate.length) options.populate = req.body.populate;
        if (req.body && req.body.select) {
            let validateRequest = validation.validateFilterWithJoi(
                req.body,
                QuestionSchemaKey.findFilterKeys,
                Question.schema.obj
            );
            if (!validateRequest.isValid) {
                return res.inValidParam({ message: `${validateRequest.message}` });
            }
            options.select = utils.getSelectObject(req.body.select);
        }
        let result = await dbService.getSingleDocument(Question, query, options);
        if (result) {

            return res.ok({ data: result });
        }
        return res.recordNotFound();
    }
    catch (error) {
        return res.failureResponse({ data: error.message });
    }
};

/**
 * @description : delete document of Question from table.
 * @param {obj} req : request including id as req param.
 * @param {obj} res : response contains deleted document.
 * @return {obj} : deleted Question. {status, message, data}
 */
const deleteQuestion = async (req, res) => {
    try {
        let query = { _id: req.params.id };
        const result = await dbService.findOneAndDeleteDocument(Question, query);
        if (result) {
            return res.ok({ data: result });
        }
        return res.recordNotFound();
    }
    catch (error) {
        return res.failureResponse();
    }
};

module.exports = {
    addQuestion,
    findAllQuestion,
    getQuestionCount,
    getQuestionByAggregate,
    updateQuestion,
    getQuestion,
    deleteQuestion,
};