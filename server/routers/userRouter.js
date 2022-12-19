import express from "express"
import { checkTodo, deleteTodo } from "../controllers/todoController.js";
import { protectMiddleware } from "../middleware.js";

const userRouter = express.Router();

userRouter.route("/todos/:idx").all(protectMiddleware)
    .put(checkTodo)
    .delete(deleteTodo);

export default userRouter;