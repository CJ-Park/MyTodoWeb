// User 모델 정의
import bcrypt from "bcrypt";
import mongoose from "mongoose";

// username, nickname, password, todos 로 구성됨
// versionKey는 수정 횟수 기록되길래 false로 제외함
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    nickname: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: "Todo"}],
    
}, {versionKey : false})

// user가 저장되기 전에 bcrypt를 사용해 비밀번호 해시화 진행
userSchema.pre("save", async function() {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 1);
    }
});

const User = mongoose.model("User", userSchema);
export default User;