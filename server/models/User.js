const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  name: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
