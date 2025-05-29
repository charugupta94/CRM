const mongoose = require("mongoose");

const segmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rules: [
      {
        field: { type: String, required: true },
        operator: { type: String, required: true },
        value: { type: mongoose.Schema.Types.Mixed },
      },
    ],
    createdBy: {
      type: String,
      default: "anonymous",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Segment", segmentSchema);
