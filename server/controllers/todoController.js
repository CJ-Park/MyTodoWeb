// 로그인 이후 Todo를 Control

import Todo from "../models/Todo.js";
import User from "../models/User.js";

// user의 정보는 session cookie를 통해 가져옴
// todo의 수정과 삭제는 todo의 id를 params로 받아서 수정

// 해당 유저의 전체 Todo List 불러오기
export const getTodo = async (req, res) => {
    const {loginUser: {_id}} = req.session;
    const findUser = await User.findById(_id).populate('todos');
    if(!findUser) {
        return res.status(400).json({
            status: 400,
            error: "Can't find user by session data",
        });
    }
    return res.json(findUser.todos);
}

// 해당 유저의 Todo List에 Todo 추가하기
export const postTodo = async (req, res) => {
    const {
        session: {
            loginUser: {_id},
        },
        body: {
            content
        }
    } = req;
    if(!content) {
        return res.status(400).json({
            status: 400,
            error: "Please write down your todo",
        });
    }
    const user = await User.findById(_id).populate('todos');
    const todo = new Todo({content, userInfo: user});
    const newTodo = await todo.save();
    user.todos.push(newTodo._id);
    user.save();

    return res.json("저장 완료");
}

// Todo의 id값을 받아서 해당 유저의 Todo List에서 삭제
export const deleteTodo = async (req, res) => {
    const {loginUser: {_id}} = req.session;
    const {idx} = req.params;

    const user = await User.findById(_id).populate('todos');
    const todo = user.todos.filter((data) => {
        const id = data._id;
        return id.toHexString() != idx;
    });
    user.todos = todo;
    user.save();
    await Todo.findByIdAndDelete(idx);
    
    return res.json("삭제 완료");
}

// Todo의 id값을 받아서 해당 유저의 Todo check 상태 변경
export const checkTodo = async (req, res) => {
    const {loginUser: {_id}} = req.session;
    const {idx} = req.params;

    const user = await User.findById(_id).populate('todos');
    const todo = await Todo.findById(idx);
    const todos = user.todos.map((data) => {
        const id = data._id
        if(id.toHexString() === idx) {
            data.checked = !data.checked;
        }
        return data;
    })
    user.todos = todos;
    user.save();
    todo.checked = !todo.checked;
    await Todo.findByIdAndUpdate(idx, todo);

    return res.json("체크 완료");
}

// 얘는 UserController에 있어야 되는데 잘못 만듦 => 배포까지 다 해놔서 추후 수정할 예정
// session cookie에서 가져온 데이터로 해당 유저를 찾아서 닉네임 반환
export const getNicknameBySession = async (req, res) => {
    const {loginUser: {_id}} = req.session;
    const user = await User.findById(_id);
    return res.json(user.nickname);
}