// import Category from "../models/categoryModel";

// export const createCategory = async (req, res) => {
//   const category = await Category.create(req.body);
//   res.json(category);
// };

// export const getCategories = async (req, res) => {
//   const categories = await Category.find();
//   res.json(categories);
// };

// export const deleteCategory = async (req, res) => {
//   await Category.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// };

const Category = require("../models/categoryModel");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};