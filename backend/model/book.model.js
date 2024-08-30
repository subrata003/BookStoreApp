import mongoose from "mongoose";
const bookschema=mongoose.Schema(
 {
  name:String,
  title:String,
  price:Number,
  category:String,
  img:String
 }
)
const Book=mongoose.model("Book",bookschema)
export default Book