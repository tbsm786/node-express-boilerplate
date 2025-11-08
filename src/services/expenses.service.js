/**
 * Service layer for expense/product entities.
 * Isolating database calls here keeps controllers decoupled from Mongoose so
 * future data-source changes (e.g., caching) can happen in one place.
 */
const Product = require('../models/expenses.model');

// Persist a new product document.
const createProduct = async (data) => {
  return Product.create(data);
};

// Retrieve every stored product; caller can add filtering later if needed.
const getAllProducts = async () => {
  return Product.find();
};

// Convenience lookup by Mongo ObjectId.
const getProductById = async (id) => {
  return Product.findById(id);
};

// Update and return the latest version of the document.
const updateProduct = async (id, data) => {
  return Product.findByIdAndUpdate(id, data, { new: true });
};

// Remove the document entirely; returns the deleted record for audit flows.
const deleteProduct = async (id) => {
  return Product.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
