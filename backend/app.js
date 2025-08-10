
import express from "express";
import cors from "cors"
import { urlencoded } from "express";
import Userrouter from "./src/routes/user.route.js";
import cookieParser from "cookie-parser";
import Productroute from "./src/routes/product.route.js";

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


app.use("/api/v1/users" , Userrouter)
app.use("/api/v1/products" , Productroute)





export default app