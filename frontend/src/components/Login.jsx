import React from 'react'
import style from "./Login.module.css"
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {
 const {
  register,
  handleSubmit,
  
  formState: { errors },
} = useForm()

const onSubmit = (data) => console.log(data)
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
    <button type="submit" class={`btn ${style.s}`}>Submit</button>
    <p>Not register?<a href='/register'>Signup</a></p>
    <NavLink to="/"><button className={style.s}>go Back</button></NavLink> 
    </div>
    
    
   </form>
  </div>
 )
}
 
export default Login
