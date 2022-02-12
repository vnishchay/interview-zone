const interview = require("../models/interviewModel");
const dbService = require("../utils/dbService")

/**
 * @description : create document of interview in mongodb collection.
 * @param {obj} req : request including body for creating document.
 * @param {obj} res : response of created document
 * @return {obj} : created interview. {status, message, data}
 */
const addInterview = async (req, res) => {
    console.log(req.body)
    try {
        let data = new interview({
            ...req.body
            // , addedBy: req.user.id
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
            updatedBy: req.user.id,
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

/**
 * @description : find all documents of interview from collection based on query and options.
 * @param {obj} req : request including option and query. {query, options : {page, limit, pagination, populate}, isCountOnly}
 * @param {obj} res : response contains data found from collection.
 * @return {obj} : found interview(s). {status, message, data}
 */
const findAllinterview = async (req, res) => {
    try {
        let options = {};
        let query = {};

        if (typeof req.body.query === 'object' && req.body.query !== null) {
            query = { ...req.body.query };
        }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.countDocument(interview, query);
            return res.ok({ data: { totalRecords } });
        }

        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) {
            options = { ...req.body.options };
        }
        let result = await dbService.getAllDocuments(interview, query, options);
        if (result && result.data && result.data.length) {
            return res.ok({ data: result });
        }
        return res.recordNotFound();
    } catch (error) {
        return res.failureResponse({ data: error.message });
    }
};


module.exports = {
    addInterview,
    updateinterview,
    findAllinterview
}