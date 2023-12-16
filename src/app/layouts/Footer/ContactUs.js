import React from "react";
import "./ContactUs.css";
import im1 from "./images/logo2.svg";
import im2 from "./images/Vector.png";
import im3 from "./images/Instagram.png";
import im4 from "./images/LinkedIn.png";
import im5 from "./images/Twitter.png";
import im6 from "./images/Gmail.png";
function ContactUs() {
  return (
    <div className="Contact-container">
      <div className="footerCol1">
        <div className="footerLogo">
          <div className="logoImg">
            <img src={im1} />
          </div>
          <div className="logoContaint">
            <div className="NSS">
              <p>
                National<br />
                Social<br />
                Summit
              </p>
            </div>
            <div className="date-box">
              <p>17th-19th Feb 2024</p>
            </div>
          </div>
        </div>
        <div className="footerText">
          <p>
            It is a platform to come together to address the socio-economic problems persisting in the country. It brings together the socially active groups present all across the country.
          </p>
        </div>
        <div className="contactusBtn">
          <button type="button" class="btn btn-primary">Contact Us</button>
        </div>
      </div>
      <div className="footerCol2">
        <div className="col1">
          <h4>About</h4>
          <a>Our History</a>
          <a>Blogs</a>
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
        </div>
        <div className="col1">
          <h4>Information</h4>
          <a>Site Map</a>
          <a>FAQs</a>
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
        </div>
      </div>
      <div className="footerCol3">
        <div className="icon-box">
          <div className="icon">
            <a href="/"> <img src={im5} /></a>
          </div>
          <div className="icon">
            <a href="/"> <img src={im4} /></a>
          </div>
          <div className="icon">
            <a href="/"> <img src={im3} /></a>
          </div>
          <div className="icon">
            <a href="/"> <img src={im2} /></a>
          </div>
          <div className="icon">
            <a href="/"> <img src={im6} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
