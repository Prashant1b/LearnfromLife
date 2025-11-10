import mongoose from "mongoose";

const Booksession = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  topic: { type: String, required: true },
  instructor: { type: String },
   transactionId:{type:String},
  fees: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", Booksession);

export default Book;
