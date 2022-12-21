// "/user" 로 라우팅되는 api들 요청에 따라 controller 실행
// user 객체의 todo 배열을 수정하므로 "/user"로 라우팅하는게 더 적절하다고 판단했음
import express from "express"
import { checkTodo, deleteTodo } from "../controllers/todoController.js";
import { protectMiddleware } from "../middleware.js";

const userRouter = express.Router();

userRouter.route("/todos/:idx").all(protectMiddleware)
    .put(checkTodo)
    .delete(deleteTodo);

export default userRouter;