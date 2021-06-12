const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String },
  password: { type: String, required: true },
  isAdmin: { type: Boolean },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
