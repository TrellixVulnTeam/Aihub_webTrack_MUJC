const { nanoid } = require("nanoid");

exports.shortId = {
  type: String,
  default: () => {
    return nanoid();
  },
  require: true,
  index: true,
};
