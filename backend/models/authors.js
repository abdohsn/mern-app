const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  dob: { type: Date },
});

const AuthorModel = mongoose.model("Author", authorSchema);

module.exports = AuthorModel;
