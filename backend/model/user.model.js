import mongoose from "mongoose";
const login=mongoose.Schema(
 {
  fullname:{
   type:String,
   require:true
  },
  email:{
   type:String,
   require:true,
   uniqu:true
  },
  password:{
   type:String,
    require:true
   
  },
 

  
 }
)

const User=mongoose.model("User",login)
export default User