const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    status: {
      type: String,
      enum: ["New", "Contacted", "Converted"],
      default: "New",
    },
    notes: [String],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", LeadSchema);