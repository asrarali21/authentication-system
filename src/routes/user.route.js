import { Router } from "express";
import { loginUser, registerUser } from "../controller/user.controller.js";


const Userrouter = Router()


Userrouter.route("/registerUser").post(registerUser)
Userrouter.route("/loginUser").post(loginUser)


export default Userrouter

