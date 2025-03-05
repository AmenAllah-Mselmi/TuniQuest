const express = require('express');
const {getAllUsers,createUser,deleteUser,getUserById,updateUser} = require('../Controller/User_Controller');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
