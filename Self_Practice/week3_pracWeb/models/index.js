const mongoose = require("mongoose");
const TodoSchema = require("./schemas/Todo");

exports.Todo = mongoose.model("todos", TodoSchema);
