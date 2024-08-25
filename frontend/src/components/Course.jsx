import React from 'react'
import style from "./Course.module.css"
import List from "../../public/List.json"
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer'

import {Link} from "react-router-dom"
function Course() {
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
            {List.map((e)=>(
              <Card e={e} key={e.id}/>
            ))}
      </div>
      <Footer/>
    </>
  )
}

export default Course
