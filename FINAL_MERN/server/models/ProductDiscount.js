const mongoose = require("mongoose");

const ProductDiscountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  percent: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

module.exports = ProductDiscountSchema;
