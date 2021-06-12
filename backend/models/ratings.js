const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: User },
  book: { type: mongoose.Schema.Types.ObjectId, ref: Book },
  rate: { type: Number },
});

const RatingModel = mongoose.model("Rating", ratingSchema);

module.exports = RatingModel;
