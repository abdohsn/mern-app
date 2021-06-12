const mongoose = require("mongoose");

const shelfSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: User },
  book: { type: mongoose.Schema.Types.ObjectId, ref: Book },
  state: { type: String, enum: ["Read", "Currently Reading", "Want To Read"] },
});

const ShelfModel = mongoose.model("Shelf", shelfSchema);

module.exports = ShelfModel;
