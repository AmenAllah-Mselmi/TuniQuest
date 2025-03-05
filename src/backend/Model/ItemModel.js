const mongoose=require('mongoose');
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  pointsCost: Number,
});
const Item = mongoose.model('Item', itemSchema);
module.exports=Item;