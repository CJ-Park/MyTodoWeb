import Todo from "../models/Todo.js";
import User from "../models/User.js";

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

export const postTodo = async (req, res) => {
    const {
        session: {
            loginUser: {_id},
        },
        body: {
            content
        }
    } = req;
    const user = await User.findById(_id).populate('todos');
    const todo = new Todo({content, userInfo: user});
    const newTodo = await todo.save();
    user.todos.push(newTodo._id);
    user.save();

    return res.json("저장 완료");
}

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


export const getNicknameBySession = async (req, res) => {
    const {loginUser: {_id}} = req.session;
    const user = await User.findById(_id);
    return res.json(user.nickname);
}