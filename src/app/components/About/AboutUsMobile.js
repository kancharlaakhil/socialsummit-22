import React from 'react'
// import aboutimg from './assets/aboutUsbg.png'
import aboutimgcover from './assets/mobileabout.png'
import aboutbg2 from './assets/aboutbg2.png'

import vission from './assets/VISION & MISSION.png'

import './AboutUsMobile.css'

function AboutUsMob() {
    return (
        <>
            <div className="mob-aboutbox">
                <div className='mob-Aboutcontainer'>
                    <div className="mob-ourstory">
                        <img src={aboutbg2} className='mob-aboutbg1' />
                        <div className="mob-aboutbgcover">
                            <div className="mob-bg">
                                <div className="mob-imgbg">
                                    <img src={aboutimgcover} className='mob-aboutbgcoverImg' />
                                </div>
                                <div className="mob-nss"><p>Team National Social Summit </p></div>
                            </div>
                            <div className="mob-aboutcontaintBox">

                                <div className="mob-aboutcontaint">
                                    We are a dedicated workforce of over 1000 volunteers striving selflessly for the growth of our nation. This year, we unite the youth of the nation to be the fire that burns the foundation of prejudices and disparity in our society. The National Social Summit, organized by the National Service Scheme(NSS) IIT Roorkee was established in 2016. It is a platform to come together to address the socio-economic problems persisting in the country. It brings together the socially active groups present all across the country. This social-fest includes various events such as Panel Discussions, Case Studies, Social Drama, Workshops, Model United Nations and Cultural shows.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mob-vission">
                    <div className="mob-boximg">
                    <img src={vission} className='mob-vissionImg' />
                    </div>
                </div>
                <div className="mob-Aboutcontainer2">
                    <img src={aboutbg2} className='mob-aboutbg2' />
                    <div className="mob-aboutcontaintBox2">
                        <div className="mob-aboutcontaint2">
                            We are a dedicated workforce of over 1000 volunteers striving selflessly for the growth of our nation. This year, we unite the youth of the nation to be the fire that burns the foundation of prejudices and disparity in our society. The National Social Summit, organized by the National Service Scheme(NSS) IIT Roorkee was established in 2016. It is a platform to come together to address the socio-economic problems persisting in the country. It brings together the socially active groups present all across the country. This social-fest includes various events such as Panel Discussions, Case Studies, Social Drama, Workshops, Model United Nations and Cultural shows.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsMob