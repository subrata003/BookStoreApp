import React from 'react'
import style from "./Login.module.css"
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
function Login() {
  const navigate=useNavigate()
 const {
  register,
  handleSubmit,
  
  formState: { errors },
} = useForm()

const onSubmit = async (data) =>{
  const userinfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password
  }
  await axios.post("http://localhost:4001/user/login",userinfo)
  .then((res)=>{
    if(res.data){
      
      toast.success('login successfully !')
      navigate("/")
      window.location.reload()
    }
    localStorage.setItem("users",JSON.stringify(res.data.user))
  }).catch((err)=>{
    
    toast.error("login error")
  })
}
const gotohome=()=>{

}
 return (
  <div className={style.loginfrom}>
   <form className={style.from} onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Email address</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email", { required: true })} />
     {errors.email && <span className={style.color}>This field is required</span>}
     
    </div>
    <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Password</label>
     <input type="password" class="form-control" id="exampleInputPassword1" {...register("password", { required: true })} />
     {errors.password && <span className={style.color}>This field is required</span>}
    </div>
    <div class="mb-3 form-check">
     <input type="checkbox" class="form-check-input" id="exampleCheck1" />
     <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <div className={style.res}> 
    <button type="submit" class={`btn ${style.s}`} > Submit</button>
    <a href='/register'>Signup</a>
    <NavLink to="/"><button className={style.s}>go Back</button></NavLink> 
    </div>
    
    
   </form>
  </div>
 )
}
 
export default Login
