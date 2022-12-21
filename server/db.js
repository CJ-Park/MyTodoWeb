// Mongo DB 사용 설정 공간
import mongoose from "mongoose";

mongoose.set('strictQuery', true);

// 환경변수에 저장한 MongoDB 주소로 연결 => 로컬에서는 mongodb://localhost:27017
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("DB Connected!");
const handleError = (err) => console.log("DB Connect Failed", err);

db.on("error", handleError);
db.once("open", handleOpen);

export default db;