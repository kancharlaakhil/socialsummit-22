import React from 'react'
import Card from './Card'
import './Events.css'
import img1 from './cardimg.png'

function Events() {
  return (
    <div className='events-container'>
        <h2>Events</h2>
        <div className="cardbox">
            <Card
            src={img1}
            heading="Action Plan"
            description="Lorem ipsum dolor sit amet consectetur. Eu scelerisque et iaculis ut quis magnis quisque dolor laoreet...."
            price="10k"/>
            <Card
            src={img1}
            heading="Action Plan"
            description="Lorem ipsum dolor sit amet consectetur. Eu scelerisque et iaculis ut quis magnis quisque dolor laoreet...."
            price="10k"/>
            <Card
            src={img1}
            heading="Action Plan"
            description="Lorem ipsum dolor sit amet consectetur. Eu scelerisque et iaculis ut quis magnis quisque dolor laoreet...."
            price="10k"/>
            <Card
            src={img1}
            heading="Action Plan"
            description="Lorem ipsum dolor sit amet consectetur. Eu scelerisque et iaculis ut quis magnis quisque dolor laoreet...."
            price="10k"/>
            
            
        </div>
        <button className='btn3'>
          <a className='plink' href="https://socialsummit.iitr.ac.in/events">See More</a>
        </button>
      
    </div>
  )
}

export default Events
