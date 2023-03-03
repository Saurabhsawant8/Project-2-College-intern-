const mongoose = require("mongoose");
const collegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, lowercase: true },

    fullName: { type: String, required: true },

    logoLink: {type: String,required: true },

    isDeleted: { type: Boolean, default: false },
  },{ versionKey:false }
);

module.exports = mongoose.model("College", collegeSchema);