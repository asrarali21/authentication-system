import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors"
import { urlencoded } from "express";

const app = express()



app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}
))
app.use(urlencoded({extended:true}))
app.use(express.static("public"))


//routes

app.get("/"  , async (req , res)=>{
   res.send("hello WAITING")
})



export default app