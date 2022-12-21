// 유저의 로그인, 회원가입 로직 구현
import User from "../models/User.js";
import bcrypt from "bcrypt";

// 유저의 회원가입 진행
// username, nickname, password 받아서 중복성 검사 후 회원가입
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

// 유저의 로그인 진행
// username, password 받아서 MongoDB에서 찾은 후 유효성 검사
// 유효하다면 session에 loggedIn과 loginUser 정보를 담아서 반환
// 잘 반환되면 해당 유저의 브라우저 쿠키에 loggedIn과 loginUser 데이터 확인 가능
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