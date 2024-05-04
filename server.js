const express = require("express")
const cookieParser = require("cookie-parser")
require("dotenv").config();

const authRoutes = require("./routes/auth.routes.js");
const messageRoutes = require("./routes/message.routes.js");
const userRoutes = require("./routes/user.routes.js");



const app = express();
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);	
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log("Connected to server")
})