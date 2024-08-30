import React from 'react'
// import { NavLink } from 'react-router-dom'
import style from "./Logout.module.css"
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'


function Logout() {
const[authUser,setartheruser]=useAuth()
 const logoutbtn=()=>{
  try {
    setartheruser({
      ...authUser,
      user:null
    })
    localStorage.removeItem("users")
    toast.success("logout successfully")
    window.location.reload()
  } catch (error) {
    toast.error("error"+error.message)
  }
 }
  return (
    <button class={`btn btn-outline-success ${style.btn}`} type="submit" onClick={logoutbtn}>Logout</button>
  )
}

export default Logout