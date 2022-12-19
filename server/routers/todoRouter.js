import express from "express";
import { getTodo, postTodo } from "../controllers/todoController.js";
import { protectMiddleware } from "../middleware.js";

const todoRouter = express.Router();

todoRouter.route("/").all(protectMiddleware)
    .get(getTodo)
    .post(postTodo);

export default todoRouter;