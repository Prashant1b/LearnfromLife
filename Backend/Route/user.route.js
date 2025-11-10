import express from "express";
import { signup, login, signout, sendOtp, isLogin } from "../Controller/user.controller.js"
import { verifyUser } from "../middlewares/verifyuser.js"

const userRouter = express.Router();

userRouter.post("/sendOtp",sendOtp)
userRouter.post("/signup",signup);
userRouter.post("/login",login);
userRouter.get("/isLogin",verifyUser,isLogin);
userRouter.get("/signout",verifyUser,signout);

export default  userRouter