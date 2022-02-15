import React from 'react';

import './css/WebView.css'
import NSSLogo from './images/FooterNSSLogo.svg'

import Facebook from './images/facebook.svg';
import Instagram from './images/instagram.svg';
import Twitter from './images/twitter.svg';
import Linkedin from './images/linkedin.svg';


const WebView = () => {
    return (
        <div className='footer-container'>
            <div className='row footer-contact-us-head'>
                <div className='col-md-4'>

                </div>
                <div className='col-md-8'>
                    Contact Us
                </div>

            </div>
            <div className='row footer-row-2'>
                <div className='col-md-4 nss-logo'>
                    <div className='row' style={{ height : '100%'}}>
                    <div className='col-md-4'>
                        </div>
                    <div className='col-md-7'
                        style={{
                          
                            backgroundImage : `url(${NSSLogo})`,
                            backgroundSize : 'contain',
                            backgroundPosition : 'center',
                            backgroundRepeat : 'no-repeat'
                        }}
                    >

                    </div>
                    </div>
                </div>
                <div className='col-md-8 footer-contact-form'>

                <form onSubmit = {(event) => {
                        event.preventDefault();
                        }}>
                            <div className='row' style={{height : '90%'}}>
                                <div className='col-md-6'>
                                    <div className='row  th-form-group' style={{height : '33.33%', margin:'0.5rem'}}>
                                    <input
                                        type="text"
                                        className="th-form-control form-control"
                                        placeholder='Full Name'
                                        id=""
                                        name=""
                                       
                                    />

                                    </div>
                                    <div className='row  th-form-group'  style={{height : '33.33%' , margin:'0.5rem'}}>
                                    <input
                                        type="text"
                                        className="th-form-control form-control"
                                        placeholder='Phone no.'
                                        id=""
                                        name=""
                                       
                                    />
                                    </div>
                                    <div className='row  th-form-group'  style={{height : '33.33%' , margin:'0.5rem'}}>
                                    <input
                                        type="text"
                                        className="th-form-control form-control"
                                        placeholder='E-mail address'
                                        id=""
                                        name=""
                                       
                                    />
                                    </div>

                                </div>
                                <div className='col-md-6'>
                                <div className='row  th-form-group' style={{height : '100%', margin:'0.5rem'}}>
                                    <textarea
                                        height={'100%'}
                                        type="text"
                                        className="th-form-control form-control"
                                        placeholder='Message'
                                        id=""
                                        name=""
                                       
                                    />

                                    </div>
                                </div>

                            </div>
                            <div className='row' style={{ height : '10%' , margin:'0.5rem'}}>
                            <div className="col-md-6 th-registration-btn-1" th-form-group style={{ paddingLeft : '0' }}>
                                <button class="th-registration-btn-2 btn mt-4" type="submit">
                                Send Message
                                </button>
                            </div>
                            </div>
                            </form>
           
              

            </div>
            </div>
            <div className='row footer-row-3'>
                <div className='col-md-4'>
                <div className='row' style={{ height : '100%'}}>
                    <div className='col-md-4'>
                        </div>
                        <div className='col-md-7 embracing-inclusion'>
                        “Embracing Inclusion”
                        </div>
                    
                   
                        </div>
                </div>
                <div className='col-md-8'>

                </div>

            </div>
            <div className='row footer-row-4'>
                <div className='col-md-4'>

                </div>
                <div className='col-md-8'>
                    <div className='row footer-find-us'>
                        <div className='col-md-5'>

                        </div>
                        <div className='col-md-7 footer-social-media-icons'>
                            <div className='row h-100'>
                                <div className='col-md-3 footer-find-us-head'> Find Us On</div>
                                <div className='col-md-9'>
                                    <div className='row h-75'>
                                    
                                        
                            <a
                            href="https://m.facebook.com/iitrsocialsummit/"
                            target="blank"
                            rel="noreferrer"
                            className="th-link"
                            style={{height :'100%', width:'25%'}}>
                              <div className='col-md-12 h-75' 
                                             style={{  backgroundImage : `url(${Facebook})`,  backgroundSize: 'contain', backgroundRepeat :'no-repeat', backgroundPosition:'center'}}
                                            ></div>
                             </a>
                                           
                             <a
                            href="https://instagram.com/iitrsocialsummit?utm_medium=copy_link"
                            target="blank"
                            rel="noreferrer"
                            className="th-link"
                            style={{height :'100%', width:'25%'}}>
                                        <div className='col-md-12 h-75' style={{ backgroundImage : `url(${Instagram})`,  backgroundSize: 'contain', backgroundRepeat :'no-repeat', backgroundPosition:'center'}}></div>
                                        </a>

                             <a
                            href="https://twitter.com/natsocialsummit?t=_E-S4iDRCvoqO3bGh4u6sw&s=08"
                            target="blank"
                            rel="noreferrer"
                            className="th-link"
                            style={{height :'100%', width:'25%'}}>
                                        <div className='col-md-12 h-75' style={{ backgroundImage : `url(${Twitter})`,  backgroundSize: 'contain', backgroundRepeat :'no-repeat', backgroundPosition:'center'}}></div>
                            </a>
                            <a
                            href="https://www.linkedin.com/company/national-social-summit"
                            target="blank"
                            rel="noreferrer"
                            className="th-link"
                            style={{height :'100%', width:'25%'}}>
                               <div className='col-md-12 h-75' style={{ backgroundImage : `url(${Linkedin})`,  backgroundSize: 'contain', backgroundRepeat :'no-repeat', backgroundPosition:'center'}}></div>
                                   </a>
                                   
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
       </div>
    
    )
}

export default WebView