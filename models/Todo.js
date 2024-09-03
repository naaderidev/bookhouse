const mongoose = require("mongoose");
require("./User");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.models?.Todo || mongoose.model("Todo", todoSchema);

export default todoModel;
