import { Router } from "express";
import { registerUser } from "../controller/user.controller.ja";


const Userrouter = Router


Userrouter.route("/registerUser").post(registerUser)


export default Userrouter

