const express = require('express');
const {createItem,deleteItem,getAllItems,getItemById,updateItem} = require('../Controller/ItemController');

const router = express.Router();

router.get('/',getAllItems);
router.get('/:id', getItemById);
router.post('/', createItem);
router.put('/:id',updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
