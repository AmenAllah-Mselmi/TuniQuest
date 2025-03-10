const Item = require('../Model/ItemModel');

exports.getAllItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

exports.createItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};
