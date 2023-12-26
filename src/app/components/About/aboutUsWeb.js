import React, { useState } from 'react'
import aboutimg from './Images/aboutUsbg.jpg'
import aboutimgcover from './Images/webviewPhoto.jpg'
import aboutbg2 from './assets/aboutbg2.png'
import abtmain from './Images/aboutbg2.jpg'
import img1 from './Images/Group 98.png'
import img2 from './Images/Component 7.png'
import img3 from './Images/OUR.png'
import './aboutUsWeb.css'

function AboutUsWeb() {
    const [hover,setHover]=useState(false)
    return (
        <div className='About-container'>
            <div className="ourstory">

                <img src={aboutimgcover} className='aboutbg1' />

                <div className="aboutbgcover" onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>

                    <img src={hover ? abtmain : aboutimg} className={`aboutbgcoverImg ${hover ? 'hovered' : ''}`} />

                    <div className="about-containt-Box">

                        <div className="about-containt">
                            The National Social Summit, organized by the National Service Scheme(NSS) IIT Roorkee was established in 2016. It is a platform to come together to address the socio-economic problems persisting in the country. It brings together the socially active groups present all across the country. This social-fest includes various events such as Panel Discussions, Case Studies, Social Drama, Workshops, Model United Nations and Cultural shows.
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourstory2">
                <div className="aboutbg2">
                    <img src={aboutbg2} className='aboutbg2Img' />
                </div>
                <div className="containtbox">
                    <div className="col1-abt">
                        <p>
                            National Social Summit 2023 envisions an inclusive society for ourselves and our posterity. Today, the Indian society falls short due to theprevalence of prejudices, bigotry and disproportionate representation. This year we seek to reform these societal values and bring abouvt the much needed change. The growing unrest in the society gives us a premonition about our grim future in a voice that is dark and foreboding. With the soaring disparities in the current global scenario we seem ill prepared to deal with the challenges. Hence, the National Social Summit is here to highlight these issues at a national platform in order to envision an inclusive society. National Social Summit 2023 envisions an inclusive society for ourselves and our posterity. Today, the Indian society falls short due to theprevalence of prejudices, bigotry and disproportionate representation. This year we seek to reform these societal values and bring abouvt the much needed change. The growing unrest in the society gives us a premonition about our grim future in a voice that is dark and foreboding. With the soaring disparities in the current global scenario we seem ill prepared to deal with the challenges. Hence, the National Social Summit is here to highlight.
                        </p>
                    </div>
                    <div className="col2-abt">
                        <div className="imgbox1">
                            <img src={img1} />
                        </div>
                        <div className="imgbox2">
                            <img src={img2} />
                        </div>
                        <div className="imgbox3">
                            <img src={img3} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUsWeb