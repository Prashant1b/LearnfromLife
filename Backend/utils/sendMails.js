import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:true,
    port: 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export const sendMail = async (email,subject,text) => {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to : email,
      subject,
      text
    });
};

