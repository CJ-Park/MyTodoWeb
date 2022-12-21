import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import apiRouter from './routers/apiRouter.js';
import todoRouter from './routers/todoRouter.js';
import userRouter from './routers/userRouter.js';
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
app.use(
    session({
        httpOnly: true,
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: true,
            maxAge: day*7,
            expires: new Date(Date.now() + day),
            domain: process.env.CLIENT_URL,
            sameSite: 'none',
        },
        
        store: MongoStore.create({mongoUrl: process.env.DB_URL}),
    })
    )
    app.use(localMiddleware);
    app.use("/api", apiRouter);
    app.use("/todos", todoRouter);
    app.use("/user", userRouter);

export default app;