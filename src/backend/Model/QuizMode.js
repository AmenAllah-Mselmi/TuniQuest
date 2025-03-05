const mongoose=require('mongoose');
const quizSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correctAnswer: String,
    challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' },
  });
  const Quiz = mongoose.model('Quiz', quizSchema);
  module.exports=Quiz