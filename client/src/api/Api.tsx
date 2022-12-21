// API 호출 함수
// env 환경변수로 서버 url 관리
import env from "ts-react-dotenv";
import axios from "axios";

type Login = {
    username: string,
    password: string
}
type Join = {
    username: string,
    nickname: string,
    password: string
}

const SERVER = env.REACT_APP_SERVER_URL;

// CORS 에러 방지를 위해 credentials에 true 추가
axios.defaults.withCredentials = true;

export const Api = {
    login: async (data: Login) => {
        return await axios.post(`${SERVER}/api/login`, data);
    },
    join: async (data: Join) => {
        return await axios.post(`${SERVER}/api/join`, data);
    },
    getTodos: async () => {
        return await axios.get(`${SERVER}/todos`);
    },
    getNickname: async () => {
        return await axios.get(`${SERVER}/api/nickname`);
    },
    postTodos: async (content: string) => {
        await axios.post(`${SERVER}/todos`, {content});
    },
    removeTodo: async (idx: number) => {
        await axios.delete(`${SERVER}/user/todos/${idx}`);
    },
    checkTodo: async (idx: number) => {
        await axios.put(`${SERVER}/user/todos/${idx}`);
    }
}