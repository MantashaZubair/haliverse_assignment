const express = require("express")
const dotenv = require("dotenv")
const userRoutes =require("./routes/userRoutes.js")
const connectDB = require("./config/db.js")
const cors = require("cors")

//configuire dotenv
dotenv.config()

//test object
const app = express()
//middleware
app.use(express.json())
app.use(cors())
//database connection
connectDB()
//routes
app.use("/api" , userRoutes)

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`server started port at ${PORT}`)
})