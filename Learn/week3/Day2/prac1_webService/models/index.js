const mongoose = require("mongoose");
const PostScheama = require("./schemas/post");

exports.Post = mongoose.model("Post", PostScheama);
