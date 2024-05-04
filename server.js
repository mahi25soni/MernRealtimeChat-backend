const express = require("express")
const cookieParser = require("cookie-parser")
require("dotenv").config();


const app = express();


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log("Connected to server")
})