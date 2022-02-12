/**
 * questionRoutes.js
 * @description :: CRUD API routes for question
 */

const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionController');

router.route('/question/create').post(questionController.addQuestion)
router.route('/question/update/:id').put(questionController.updateQuestion)
router.route('/question/get/:id').get(questionController.getQuestion)
router.route('/question/delete/:id').delete(questionController.deleteQuestion)
router.route('/question/get').get(questionController.getQuestionByAggregate)

module.exports = router;
