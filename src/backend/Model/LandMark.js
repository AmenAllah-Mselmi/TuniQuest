const mongoose=require('mongoose');
const landmarkSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
  });
  const Landmark = mongoose.model('Landmark', landmarkSchema);
  module.exports=Landmark;