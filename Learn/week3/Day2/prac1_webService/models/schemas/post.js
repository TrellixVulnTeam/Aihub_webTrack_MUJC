const shortId = require("./type/short-id");
const { Schema } = require("mongoose");
module.exports = new Schema(
  {
    shortId,
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);
