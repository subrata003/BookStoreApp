import React from 'react'
import style from "./Banner.module.css"
import Navbar from './Navbar'
import Footer from './Footer'
import Freebook from './Freebook'



function Banner() {
  
  return (
    <>
    <Navbar/>
    <div className={style.maindiv}>
      <div className={style.leftdiv}>
        <h1 className='display-4'>Hellow, Welcomes here to learn something <span className={style.spamcolor}>new everyday!!!</span></h1>
        <p className={`mt-4 ${style.p}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        
        <a href='/course'><button type="button" class={`btn  mt-4 ${style.secbtn}`}>Course</button></a>

      </div>
      <div className={style.rightdiv}>
          <img src="https://www.reshot.com/preview-assets/icons/5MDEH3F8JL/lamp-and-books-5MDEH3F8JL.svg" className={style.bannerimg}></img>
      </div>
    </div>
    <Freebook/>
   <Footer/>
    
   
    </>
  )
}

export default Banner
