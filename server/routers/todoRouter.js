// "/todo" 로 라우팅되는 api들 요청에 따라 controller 실행
// 단순히 todo를 추가하고 불러오는게 주된 역할이므로 "/todo"로 라우팅하는게 적절하다 판단 
import express from "express";
import { getTodo, postTodo } from "../controllers/todoController.js";
import { protectMiddleware } from "../middleware.js";

const todoRouter = express.Router();

todoRouter.route("/").all(protectMiddleware)
    .get(getTodo)
    .post(postTodo);

export default todoRouter;