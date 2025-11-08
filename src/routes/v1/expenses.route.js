/**
 * REST routing table for expense/product resources.
 * Validation is kept alongside the route definitions so every mutation
 * passes through a Joi schema before hitting controller logic.
 */
const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/expenses.validation');
const productController = require('../../controllers/expenses.controller');

const router = express.Router();

// Collection routes
router
  .post("/",validate(productValidation.createProduct), productController.createProduct)
  .get("/",productController.getProducts);

// Single-resource routes keyed by Mongo ObjectId
router
  .route('/:id')
  .get(productController.getProduct)
  .patch(validate(productValidation.updateProduct), productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
