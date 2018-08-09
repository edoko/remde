var mongoose = require("mongoose");

var ContentSchema = new mongoose.Schema({
  content: String,
  date: {
    type: Date,
    default: () => new Date().getTime() + 1000 * 60 * 60 * 9
  }
});

module.exports = mongoose.model("Content", ContentSchema);
