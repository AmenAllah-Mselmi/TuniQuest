const express = require('express');
const {createChallenge,deleteChallenge,getAllChallenges,getChallengeById,updateChallenge} = require('../Controller/Challenge_Controller');

const router = express.Router();

router.get('/', getAllChallenges);
router.get('/:id', getChallengeById);
router.post('/', createChallenge);
router.put('/:id', updateChallenge);
router.delete('/:id', deleteChallenge);

module.exports = router;
