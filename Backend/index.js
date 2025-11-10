import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import Cardroute from "./Route/card.route.js";
import userRouter from "./Route/user.route.js";
import nodemailer from "nodemailer";
import Quizroute from "./Route/Quiz.route.js"
import Contacts from "./Route/Contact.route.js"
import Book from "./Route/book.route.js"
import QuizResultRoute from "./Route/QuizResult.route.js"
import Instructor from "./Route/Instructor.route.js"
import PaymentRoute from "./Route/payment.route.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MongoDBURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err.message));

// Card routes
app.use("/Card", Cardroute);
app.use("/Quizzes", Quizroute);
// ContactUs route
app.use("/payment", PaymentRoute);
app.use("/contact",Contacts)
app.use("/book",Book)
app.use("/quizresult", QuizResultRoute);
app.use(userRouter);
app.use("/Instructor",Instructor)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
