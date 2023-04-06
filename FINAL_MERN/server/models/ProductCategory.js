const mongoose = require("mongoose");

const ProductCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = ProductCategorySchema;
