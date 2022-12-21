// 최상위 파일 -> 기본적으로 필요한 애들 import 진행
// app.listen 으로 서버 구동
import "dotenv/config";
import "./db.js";
import "./models/Todo.js";
import "./models/User.js";
import app from "./server.js";

const PORT = 4000;

const handleListening = () => console.log(`Server Listening on port ${PORT}`);

app.listen(PORT, handleListening);