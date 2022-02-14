import React from 'react'
import "./css/Footer.css"
import Logo from "../../assets/images/nss-logo.png";
import {Twitter,Facebook,Instagram,Linkedin,Mail,Phone,MapPin,} from "react-feather";


export const Footer = () => {
    return (
       
        <div className='ss-homepage-top' >
             <div className='ss-homepage-Contact d-md-bolck'>
                <span className='d-none d-md-block'>Contact Us</span>
              <center><div className='ss-homepage-Contact-bottomborder'></div></center>
              </div>
             
              <div className='row'>
                  <div className='col-md-1 '></div>
                  <div className='col-md-5 d-none d-md-block'>
                     
                      <div >
                      <img src={Logo} className='img-fluid'/>
                      </div>
                      <br/>
                      <div className='row ss-homepage-Tag'>
                      “Embracing Inclusion”
                      </div>
                  </div>
                  
                  <div className='col-md-5 d-none d-md-block '>
                      <div className='row'>
                      <div className='col-md-1 d-none d-md-block'><div className='ss-homepage-borderleft'></div></div>
                          <div className='col-md-5'>
                          
                          <form>
                          <br/>
                              <div className=' ss-homepage-textbox'>
                                  <input className='inputplace1' type="text" placeholder='Full Name'/>
                              </div><br/>
                              <div className='ss-homepage-textbox'>
                                  <input className='inputplace1' type="number" placeholder='Phone No'/>
                              </div><br/>
                              <div className=' ss-homepage-textbox'>
                                  <input className='inputplace1' type="email" placeholder='E-mail address'/>
                              </div><br/>
                              
                          </form>
                          
                          </div>
                          <div className='col-md-6'>
                              <form>
                              <br/>
                              <div className=' ss-homepage-textbox'>
                                      <input className='inputplace2' type="text" placeholder='Message' />
                             </div>
                             <button type="submit" className="ss-homepage-btn1">Send Message</button><br/>
                              </form>
                              <div className='d-block d-md-none'>
                          <br/><br/>
                          <center>
                                  <div className="d-flex align-items-center pb-3">
                                      <MapPin
                                        className="m-3 "
                                        color="black"
                                        onClick={() => {
                                          window.location.href =
                                            "https://goo.gl/maps/NtHfdoBguiADxoAh7";
                                        }}
                                      />
                                        <p className="mb-0"><br/>
                                        NSS Office, 2nd floor, Multi Activity Centre (MAC), IIT Roorkee
                                      </p>
                                  </div>
                                  <div className="d-flex align-items-center pt-md-4 pt-2 pb-3">
                                      <Phone
                                      
                                        className=" m-3 th-footer-contact"
                                        color="black"
                                        onClick={() => {
                                          window.location.href = `tel: +91-9877247661`;
                                        }}
                                      />
                                      <p className=" mb-0">+91 94250 08449</p>
                                  </div>
                                  <div className="d-flex align-items-center pb-3">
                                      <Mail
                                       
                                        className="m-4 th-footer-contact"
                                        color="black"
                                        onClick={() => {
                                          window.location.href = `mailto:nss@iitr.ac.in`;
                                        }}
                                      />
                                      <p className=" mb-0">socialsummit@iitr.ac.in</p>
                                  </div>
                                  
                          </center>
                          </div>
                          </div>
                          
                      </div>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-md-10 d-none d-md-block'><div className='ss-homepage-horizontalline'></div></div>
              </div>
              <div className='row'>
                <div className='col-md-6'></div>
                <div className='col-md-6'>
                  <div className='row'>
                        <div className='col-md-5 d-block d-md-none'>
                            
                            <div className='row '>
                            <img src={Logo} className='img-fluid'/>
                            </div>
                            <br/>
                            
                            <div className='row ss-homepage-Tag2 '>
                            <center>“Embracing Inclusion”</center>
                            </div>
                        </div>
                    
                      <div className='col-md-5 col-sm-12 ss-homepage-find '>
                      <center>Find Us On</center>
                      <div className='ss-homepage-find-bottomborder'></div>
                      </div>
                   
                      <div className='col-md-6 '>
                          <div className="pt-4 d-flex justify-content-center align-items-center">
                          <center>
                          <a
                            href="https://www.facebook.com/nssiitr"
                            target="blank"
                            rel="noreferrer"
                            className="th-link"
                          >
                            <Facebook
                              className="mr-md-5 m-4 th-footer-icon"
                              color="#663AA3"
                              fill='#663AA3'
                              width="38px"
                              height="38px"
                            />
                          </a>
                          <a
                            href="https://www.instagram.com/nssiitr/"
                            target="blank"
                            rel="noreferrer"
                            className="th-link"
                          >
                            <Instagram
                              className="mr-md-5 m-4 th-footer-icon"
                              color="#663AA3"
                              width="38px"
                              height="38px"
                            />
                          </a>
                          <a
                            href="https://twitter.com/NSS_IITR?s=09"
                            target="blank"
                            rel="noreferrer"
                            className="th-link"
                          >
                            <Twitter
                              className="mr-md-5 m-4 th-footer-icon"
                              color="#663AA3"
                              fill='#663AA3'
                              width="38px"
                              height="38px"
                            />
                          </a>
                          
                          <a
                            href="https://www.linkedin.com/company/nssiitr/mycompany/"
                            target="blank"
                            rel="noreferrer"
                            className="th-link"
                          >
                            <Linkedin
                              className="mr-md-5 m-4 th-footer-icon"
                              color="#663AA3"
                              width="38px"
                              height="38px"
                            />
                          </a>
                          </center>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
        </div>
      )
  }