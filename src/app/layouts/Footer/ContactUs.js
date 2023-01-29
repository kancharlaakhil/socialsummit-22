import React from 'react'
import './ContactUs.css'
import im1 from './images/facebook.png'
import im2 from './images/inst.png'
import im3 from './images/Linkedin.png'
import im4 from './images/Twitter.png'

function ContactUs() {
  return (
    <div className='contactus-container'>
        <div className="main">
            <div className="socialmedia">
                <div className="socialmain">
                    <img src="images/Logo2.png" alt="" />
                    <h2 className='hd1'>BREAKING CONVENTIONS</h2>
                    <br />
                    <br />
                    
                    <p>Follow us on</p>
                    <div className="socialicons">
                        <img src={im1} alt="" />
                        <img src={im2} alt="" />
                        <img src={im3}alt="" />
                        <img src={im4} alt="" />
                        

                    </div>
                </div>
            </div>
            <div className="form">
                <h4>Contact Us</h4>
                <form  action="">
                    <div className='formcss'>
                    <input className='inputbox' type="text" placeholder='Name'/>
                    <input className='inputbox' type="text" placeholder='Contact'/>
                    <input className='inputbox' type="text" placeholder='Email ID'/>

                    </div>

                    <textarea className='textarea' name="" id="" cols="30" rows="10">Message</textarea>
                </form>
                <button>Send Message</button>
            </div>
        </div>
        <div className="footer">
            <div className="line"></div>
            {/* <div ></div> */}
            <p className="copyright">@copyright | National Social Summit</p>
        </div>
      
    </div>
  )
}

export default ContactUs
