const Quiz = require('../Model/QuizMode');

exports.getAllQuizzes = async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
};

exports.getQuizById = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
};

exports.createQuiz = async (req, res) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.json(quiz);
};

exports.updateQuiz = async (req, res) => {
  const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(quiz);
};

exports.deleteQuiz = async (req, res) => {
  await Quiz.findByIdAndDelete(req.params.id);
  res.json({ message: "Quiz deleted" });
};
