const mongoose = require("mongoose");

const banSchema = mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const banModel = mongoose.models?.Ban || mongoose.model("Ban", banSchema);

export default banModel;
