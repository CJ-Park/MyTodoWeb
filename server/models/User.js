import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    nickname: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: "Todo"}],
    
}, {versionKey : false})

userSchema.pre("save", async function() {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 1);
    }
});

const User = mongoose.model("User", userSchema);
export default User;