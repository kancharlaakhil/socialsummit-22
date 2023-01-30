import React from 'react'
import './ContactUs.css'

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
                        <img src="images/facebook.png" alt="" />
                        <img src="images/inst.png" alt="" />
                        <img src="images/Twitter.png" alt="" />
                        <img src="images/Linkedin.png" alt="" />
                        

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
