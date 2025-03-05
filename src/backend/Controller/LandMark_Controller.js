const Landmark = require('../Model/LandMark');

exports.getAllLandmarks = async (req, res) => {
  const landmarks = await Landmark.find();
  res.json(landmarks);
};

exports.getLandmarkById = async (req, res) => {
  const landmark = await Landmark.findById(req.params.id);
  res.json(landmark);
};

exports.createLandmark = async (req, res) => {
  const landmark = new Landmark(req.body);
  await landmark.save();
  res.json(landmark);
};

exports.updateLandmark = async (req, res) => {
  const landmark = await Landmark.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(landmark);
};

exports.deleteLandmark = async (req, res) => {
  await Landmark.findByIdAndDelete(req.params.id);
  res.json({ message: "Landmark deleted" });
};
