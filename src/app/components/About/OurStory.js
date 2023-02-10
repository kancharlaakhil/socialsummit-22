import React from 'react'
import './OurStory.css'
import aboutimg from './assets/Web_about us.png'
import maimg from './assets/Mobile_about us.png'

function OurStory() {
  return (
    <div className='ourstory-container'>
      <div className="images">
        <img className='aimg' src={aboutimg} alt="" />
        <img className='maimg' src={maimg} alt="" />
      
      </div>
      <div className="content">
        <h3 className='hd1'>OUR STORY</h3>
        <p className='para'>The National Social Summit, organized by the National Service Scheme(NSS) IIT Roorkee was established in 2016. It is a platform to come together to address the socio-economic problems persisting in the country. It brings together the socially active groups present all across the country. This social-fest includes various events such as Panel Discussions, Case Studies, Social Drama, Workshops, Model United Nations and Cultural shows.</p>
      </div>
    
      
  
    </div>
  )
}

export default OurStory
