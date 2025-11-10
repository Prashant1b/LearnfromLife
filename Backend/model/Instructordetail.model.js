import mongoose from "mongoose";

const Instructor=mongoose.Schema({
    name:String,
   experience:String,
   image:String,
   fees:String
})

const Details= mongoose.model("instructor",Instructor); 


export default Details;