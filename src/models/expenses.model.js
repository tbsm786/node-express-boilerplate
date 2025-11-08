/**
 * Product/Expense schema used by the expenses feature set.
 * The schema stays intentionally small: validation for richer requirements
 * (e.g., categories, currency) can be iterated later without touching callers.
 */
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// Add plugins that convert mongoose documents to JSON
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
