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

axios.defaults.withCredentials = true;

export const Api = {
    login: async (data: Login) => {
        return await axios.post('http://localhost:4000/api/login', data);
    },
    join: async (data: Join) => {
        return await axios.post('http://localhost:4000/api/join', data);
    },
    getTodos: async () => {
        return await axios.get('http://localhost:4000/todos');
    },
    getNickname: async () => {
        return await axios.get('http://localhost:4000/api/nickname');
    },
    postTodos: async (content: string) => {
        await axios.post('http://localhost:4000/todos', {content});
    },
    removeTodo: async (idx: number) => {
        await axios.delete(`http://localhost:4000/user/todos/${idx}`);
    },
    checkTodo: async (idx: number) => {
        await axios.put(`http://localhost:4000/user/todos/${idx}`);
    }
}