const mongoose = require("mongoose");

const newsletterSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const newsletterModel =
  mongoose.models?.Newsletter || mongoose.model("Newsletter", newsletterSchema);

export default newsletterModel;
