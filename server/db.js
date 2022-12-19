import mongoose from "mongoose";

mongoose.set('strictQuery', true);

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