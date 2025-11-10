import mongoose from "mongoose";

const Carddata=mongoose.Schema({
    name:String,
    price:Number,
    title:String,
    category:String,
    image:String
})

const Card = mongoose.model("Card", Carddata); 


export default Card;