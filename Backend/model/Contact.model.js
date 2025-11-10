import mongoose from "mongoose";

const Contactdata=mongoose.Schema({
    name:String,
   email:String,
   message:String
})

const Contact= mongoose.model("contact",Contactdata); 


export default Contact;