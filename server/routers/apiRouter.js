import express from "express";
import { postJoin, postLogin } from "../controllers/userController.js"
import { getNicknameBySession } from "../controllers/todoController.js";
import { protectMiddleware } from "../middleware.js";

const apiRouter = express.Router();

apiRouter.route("/join").post(postJoin);
apiRouter.route("/login").post(postLogin);
apiRouter.route("/nickname").all(protectMiddleware).get(getNicknameBySession);

export default apiRouter;