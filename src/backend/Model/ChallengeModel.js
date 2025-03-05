const mongoose=require('mongoose');
const challengeSchema = new mongoose.Schema({
    title: String,
    description: String,
    type: { type: String, enum: ['quiz', 'puzzle', 'other'] },
    points: Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  });
  const Challenge = mongoose.model('Challenge', challengeSchema);
  module.exports=Challenge