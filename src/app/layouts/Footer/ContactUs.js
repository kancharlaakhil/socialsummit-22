import React from "react";
import "./ContactUs.css";
import im1 from "./images/Logo2.png";
import im2 from "./images/facebook.png";
import im3 from "./images/inst.png";
import im4 from "./images/Linkedin.png";
import im5 from "./images/Twitter.png";

function ContactUs() {
  return (
    <div className="Contact-container">
      <div className="contact-main">
        <div className="contactleft">
          <div className="socialmain">
            <img src={im1} alt="" />
            <h2 className="hd1">BREAKING CONVENTIONS</h2>
            <p>
              <a href="mailto:socialsummit@iitr.ac.in">
                socialsummit@iitr.ac.in
              </a>
            </p>
            <p>+91 8791101131</p>

            <p>Follow us on</p>
            <div className="socialicons">
              <img src={im2} alt="">
                {/* <a href="https://www.instagram.com/iitrsocialsummit/?utm_medium=copy_link"></a> */}
              </img>
              <img src={im3} alt="" />
              <img src={im4} alt="" />
              <img src={im5} alt="" />
            </div>
          </div>
        </div>
        <div className="contactright">
          <h4>Contact Us</h4>
          <div>
            <form action="https://formspree.io/f/xyyakoor" method="POST">
              <div className="form">
                <div className="formcss">
                  <input
                    name="Name"
                    className="inputbox"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    name="Number"
                    className="inputbox"
                    type="text"
                    placeholder="Contact"
                  />
                  <input
                    name="Email"
                    className="inputbox"
                    type="email"
                    placeholder="Email ID"
                  />
                </div>

                <textarea
                  name="Message"
                  className="textarea"
                  id=""
                  cols="30"
                  rows="6"
                >
                  Message
                </textarea>
              </div>

              <button type="submit" className="formbutton">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer">
        <hr />
        <p className="copyright">@copyright | National Social Summit</p>
      </div>
    </div>
  );
}

export default ContactUs;
