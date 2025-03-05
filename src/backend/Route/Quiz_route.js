const express = require('express');
const {createQuiz,deleteQuiz,getAllQuizzes,getQuizById,updateQuiz} = require('../Controller/Quiz_Controller');

const router = express.Router();

router.get('/', getAllQuizzes);
router.get('/:id',getQuizById);
router.post('/', createQuiz);
router.put('/:id', updateQuiz);
router.delete('/:id', deleteQuiz);

module.exports = router;
