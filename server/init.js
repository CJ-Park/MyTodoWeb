import "dotenv/config";
import "./db.js";
import "./models/Todo.js";
import "./models/User.js";
import app from "./server.js";

const PORT = 4000;

const handleListening = () => console.log(`Server Listening on port ${PORT}`);

app.listen(PORT, handleListening);