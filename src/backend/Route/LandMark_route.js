const express = require('express');
const {createLandmark,deleteLandmark,getAllLandmarks,getLandmarkById,updateLandmark} = require('../Controller/LandMark_Controller');

const router = express.Router();

router.get('/', getAllLandmarks);
router.get('/:id', getLandmarkById);
router.post('/',createLandmark);
router.put('/:id', updateLandmark);
router.delete('/:id',deleteLandmark);

module.exports = router;
