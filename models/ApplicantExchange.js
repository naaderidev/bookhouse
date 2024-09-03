const mongoose = require("mongoose");

const applicantExchangeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    suggest: {
      type: String,
      required: true,
    },
    request: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const applicantExchangeModel =
  mongoose.models?.ApplicantExchange ||
  mongoose.model("ApplicantExchange", applicantExchangeSchema);

export default applicantExchangeModel;
