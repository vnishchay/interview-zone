const interview = require("../models/interviewModel");
const dbService = require("../utils/dbService")
const InterviewModel = require('../models/interviewModel')
/**
 * @description : create document of interview in mongodb collection.
 * @param {obj} req : request including body for creating document.
 * @param {obj} res : response of created document
 * @return {obj} : created interview. {status, message, data}
 */
const addInterview = async (req, res) => {
    try {
        let data = new interview({
            ...req.body
        });
        let result = await dbService.createDocument(interview, data);
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
 * @description : update document of interview with data by id.
 * @param {obj} req : request including id in request params and data in request body.
 * @param {obj} res : response of updated interview.
 * @return {obj} : updated interview. {status, message, data}
 */
const updateinterview = async (req, res) => {
    try {
        delete req.body['addedBy'];
        delete req.body['updatedBy'];
        let data = {
            idOfParticipant: req.user,
            ...req.body,
        };
        let validateRequest = validation.validateParamsWithJoi(
            data,
            interviewSchemaKey.updateSchemaKeys
        );
        if (!validateRequest.isValid) {
            return res.inValidParam({ message: `Invalid values in parameters, ${validateRequest.message}` });
        }
        let query = { _id: req.params.id };
        let result = await dbService.findOneAndUpdateDocument(interview, query, data, { new: true });
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

const findInterview = async (req, res) => {
    try {
        const interview = await InterviewModel.find();
        return res.status(200).json({
            data: interview,
            status: 'success'
        })
    }
    catch (e) {
        return res.status(400).json({
            message: e.message,
            status: 'fail'
        })
    }
}




module.exports = {
    addInterview,
    findInterview,
    updateinterview
}