// 서버 구축을 위해 express 사용
import express from 'express';
// 세션 쿠키 로그인 구현을 위해 express-session, cookie-parser 사용
import session from 'express-session';
import cookieParser from 'cookie-parser';
// 세션 데이터를 저장하기 위해 MongoStore로 MongoDB 사용
import MongoStore from 'connect-mongo';
// cors 에러 방지를 위해 사용
import cors from 'cors';
import apiRouter from './routers/apiRouter.js';
import todoRouter from './routers/todoRouter.js';
import userRouter from './routers/userRouter.js';
// 요청시 자동으로 session 값을 저장해주기 위해 미들웨어 사용
import { localMiddleware } from './middleware.js';

const app = express();

const day = 86400000;
let corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
// httpOnly 옵션으로 JS로 Session 추출 못하도록 방지
app.use(
    session({
        httpOnly: true,
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: day*7,
            expires: new Date(Date.now() + day),
        },
        // 생성된 session 자동으로 MongoDB에 저장
        store: MongoStore.create({mongoUrl: process.env.DB_URL}),
    })
    )
    // route 이전에 미들웨어 실행해서 session 값 있으면 response header에 쿠키 저장
    app.use(localMiddleware);
    app.use("/api", apiRouter);
    app.use("/todos", todoRouter);
    app.use("/user", userRouter);

export default app;