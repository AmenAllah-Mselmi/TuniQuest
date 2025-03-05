const Challenge = require('../Model/ChallengeModel');


exports.getAllChallenges = async (req, res) => {
  const challenges = await Challenge.find();
  res.json(challenges);
};

exports.getChallengeById = async (req, res) => {
  const challenge = await Challenge.findById(req.params.id);
  res.json(challenge);
};

exports.createChallenge = async (req, res) => {
  const challenge = new Challenge(req.body);
  await challenge.save();
  res.json(challenge);
};

exports.updateChallenge = async (req, res) => {
  const challenge = await Challenge.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(challenge);
};

exports.deleteChallenge = async (req, res) => {
  await Challenge.findByIdAndDelete(req.params.id);
  res.json({ message: "Challenge deleted" });
};
