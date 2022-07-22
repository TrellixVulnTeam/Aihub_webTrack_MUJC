const { Schema } = require("mongoose");
const shortId = require("./type/short-id");

module.exports = new Schema(
  {
    shortId,
    title: String,
    content: String,
    isDone: Boolean,
  },
  {
    timestamps: true,
  }
);
