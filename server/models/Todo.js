// Todo 모델 정의
import mongoose from "mongoose";

// content, checked, userInfo 로 구성됨
// userInfo는 해당 Todo가 누가 작성한지 표시
const todoSchema = new mongoose.Schema({
    content: {type: String, required: true},
    checked: {type: Boolean, required: true, default: false},
    userInfo: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;