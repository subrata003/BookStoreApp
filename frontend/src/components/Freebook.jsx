import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./Freebook.module.css"
import List from "../../public/List.json"
import Card from './Card';
function Freebook() {
 const filterdata=List.filter((even)=>even.category==="free")

 var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 3,
     infinite: true,
     dots: true
    }
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 2,
     initialSlide: 2
    }
   },
   {
    breakpoint: 480,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1
    }
   }
  ]
 };
 return (
  <div className={style.maindiv}>
   <div>
    <h2>Free Offered Courses</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
   </div>
   <div>
    <Slider {...settings}>
     {filterdata.map((e)=>(
       <Card e={e} key={e.id}/>
     ))}
    </Slider>

   </div>
  </div>
 )
}

export default Freebook
