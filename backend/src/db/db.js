import mongoose from "mongoose";


const connectDB = async()=>{
  try {
     const connectionIntance =  await mongoose.connect(process.env.MONGODB_URI)
     console.log(`mongo db connected , ${connectionIntance.connection.host}`);
  } catch (error) {
  console.log("mongodb connection error", error)
  }
   

}
export default connectDB