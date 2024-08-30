import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"
export const signup= async(req,res)=>{
 try {
  const{fullname,email,password}=req.body
  const user= await User.findOne({email})
  if(user){
   return res.status(400).json({massage:"user already exists"})
  }
  const hashpw=await bcryptjs.hash(password,10)
  const createuserdata=new User({
   fullname :fullname,
   email:email,
   password :hashpw
  })
  await createuserdata.save()
  res.status(201).json({massage:"user created successfully",user:{_id:createuserdata._id,fullname:createuserdata.fullname,email:createuserdata.email}})
  
 } catch (error) {
  console.log("error",error);
  res.status(500).json({massage:"there is some problem"})
  
  
 }
}
export const login_data = async(req,res)=>{
 try {
  const {email,password}=req.body
  const user=await User.findOne({email})  //come from database
  const isMatch=await bcryptjs.compare(password,user.password)
  if(!user || !isMatch){
   return res.status(400).json({massage:"invalid login details"})
  }
  else{
   return res.status(201).json({massage:"login success",user:{
    fullname:user.fullname,
    email:user.email,
    _id:user._id
   }})
  }
  
 } catch (error) {
  console.log("login error");
  return res.status(400).json({massage:"invalid login details"})
 }
}