/**
 * REST controller for expense/product resources.
 * Each handler translates HTTP input/output concerns and defers persistence
 * logic to the service layer for easier testing and future reuse.
 */
const productService = require('../services/expenses.service');

// POST /v1/expenses
const createProduct = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).send(product);
  } catch (err) {
    next(err);
  }
};

// GET /v1/expenses
const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.send(products);
  } catch (err) {
    next(err);
  }
};

// GET /v1/expenses/:id
const getProduct = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.send(product);
  } catch (err) {
    next(err);
  }
};

// PATCH /v1/expenses/:id
const updateProduct = async (req, res, next) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.send(product);
  } catch (err) {
    next(err);
  }
};

// DELETE /v1/expenses/:id
const deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
