import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {type: String, required: true},
    checked: {type: Boolean, required: true, default: false},
    userInfo: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;