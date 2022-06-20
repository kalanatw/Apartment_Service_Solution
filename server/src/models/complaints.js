const mongoose = require("mongoose");

const complaintsSchema = new mongoose.Schema({
  complaintID: {
    type: String,
  },
  ResidentID: {
    type: String,
  },
  Date: {
    type: String,
  },
  Category: {
    type: String,
  },
  Description: {
    type: String,
  },
  Reply: {
    type: String,
  },
  Status: {
    type: String,
  },
});

const Complaints = mongoose.model("Complaints", complaintsSchema);

module.exports = Complaints;
