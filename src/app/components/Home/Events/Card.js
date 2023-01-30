import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card-container'>
        <div className="cardimg">
            <img className='cimg' src={props.src} alt="" />
        </div>
        <div className="cardinfo">
            <h5>{props.heading}</h5>
            <p>{props.description}</p>
            <p id='p2'>Price Worth:<span>{props.price}</span></p>
        </div>
        <div className="hoverbox">
          <button id='hoverbtn1'>Register</button>
          <button id='hoverbtn2'>Rulebook</button>
          {/* <a href="">Know More</a> */}
          <button id="hoverbtn3">Know More</button>
        </div>
      
    </div>
  )
}

export default Card
