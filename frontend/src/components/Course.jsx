import React, { useEffect, useState } from 'react'
import style from "./Course.module.css"

import axios from "axios"
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer'

import {Link} from "react-router-dom"
function Course() {
  const [book,usebook]=useState([])
  useEffect(()=>{
    const getbook=async()=>{
      try {
        const newfetchdata=await axios.get("http://localhost:4001/book")
        console.log(newfetchdata.data);
        usebook(newfetchdata.data)
        
      } catch (error) {
        console.log(`there is some error ${error}`);
        
      }
    }
    getbook()
  },[])
  return (
    <>
    <Navbar/>
      <div className={style.maindiv}>
        <h1>We're delighted to have you <span className={style.span}>Here!</span> </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <Link to="/">
          <button className={style.btn}>Back</button>
        </Link>
      </div>
      <div className={style.imgdiv}>
            {book.map((e)=>(
              <Card e={e} key={e.id}/>
            ))}
      </div>
      <Footer/>
    </>
  )
}

export default Course
