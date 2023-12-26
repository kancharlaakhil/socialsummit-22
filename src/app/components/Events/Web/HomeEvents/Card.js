import React from 'react'
import "./EventsPagePOP.css"
import Casestudy from './CaseStudy/Casestudy'
import EventData from './EventData'


export default function Card(props) {

  return (
    <div className="events-pop-up-cards-2">
    <div className="events-pop-up-cards-2-content-2">
      <img src={props.imgscc} alt='case study' className='events-pop-up-cards-1-img'></img>
      <span className='events-pop-up-cards-2-topic'>{props.title}</span>
    </div>
    <div className="events-pop-up-cards-2-btns">
      <button className="events-pop-up-cards-2-btns-register">Register</button>
      <button className="events-pop-up-cards-2-btns-details ">Details</button>


    </div>
  </div>

 
  )
}
