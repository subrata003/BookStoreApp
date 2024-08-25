import React from 'react'
import style from "./Card.module.css"

function Card({e}) {
 console.log(e);
 
 return (
  <div className={style.maindiv2}>
   <div className={`card ${style.maindiv}`}>
   <div className={style.imgdiv}>
    <img className={style.cardimg} src={e.img} class="card-img-top" alt="..." />
    </div>
    <div class="card-body">
    <div className={style.title}>
     <h5 class="card-title">{e.name}</h5>
     <h5 class={`card-title ${style.category}`}>{e.category}</h5>
     </div>
     <h5>price:{e.price}</h5>
     <p class="card-text">{e.title}</p>
     <a href="#" class="btn btn-primary">Buy Now</a>
    </div>
   </div>
  </div>
 )
}

export default Card
