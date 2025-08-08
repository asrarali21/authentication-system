import app from "./app.js";
import connectDB from "./src/db/db.js";
import dotenv from "dotenv"

dotenv.config()

connectDB().then(()=>{
    app.listen( process.env.PORT, ()=>{
        console.log(`server listening at ${process.env.PORT}`);
    } )
}).catch((error)=>{
    console.log("mongodb error " , error);
})
