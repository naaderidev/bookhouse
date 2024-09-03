const mongoose = require("mongoose");
require("./Comment");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    translator: {
      type: String,
      required: false,
    },
    editor: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: false,
    },
    publishDate: {
      type: String,
      required: true,
    },
    printPrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    secondHand: {
      type: Boolean,
      required: true,
    },
    rupture: {
      type: Boolean,
      required: true,
    },
    highlight: {
      type: Boolean,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 5,
    },
    comments: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Comment",
        },
      ],
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productModel =
  mongoose.models?.Product || mongoose.model("Product", productSchema);

export default productModel;
