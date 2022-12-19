import User from "../models/User.js";
import bcrypt from "bcrypt";

export const postJoin = async (req, res) => {
    const {username, nickname, password} = req.body;
    const duplicateUser = await User.exists({$or: [{username} , {nickname}]});
    if(duplicateUser) {
        return res.status(409).json({
            status: 409,
            error: 'Duplicate Error'
        });
    } else {
        try {
            await User.create({
                username,
                nickname,
                password
            });
            return res.status(200).json("가입 성공");
        } catch (err) {
            return res.sendStatus(500);
        }
    }
}

export const postLogin = async (req, res) => {
    const {username, password} = req.body;
    const findUser = await User.findOne({username});
    if(!findUser) {
        return res.status(400).json({
            status: 400,
            error: "Account with this username does not exist",
        });
    }
    const validate = await bcrypt.compare(password, findUser.password);
    if(!validate) {
        return res.status(400).json({
            status: 400,
            error: "Wrong Password",
        });
    }
    req.session.loggedIn = true;
    req.session.loginUser = findUser;
    return res.status(200).json(findUser.nickname);
}