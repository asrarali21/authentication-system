import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controller/user.controller.js";


const Userrouter = Router()


Userrouter.route("/registerUser").post(registerUser)
Userrouter.route("/loginUser").post(loginUser)
Userrouter.route("/logoutUser").post(logoutUser)


export default Userrouter

