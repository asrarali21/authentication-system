import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";


const Userrouter = Router()


Userrouter.route("/registerUser").post(registerUser)


export default Userrouter

