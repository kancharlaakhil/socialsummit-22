import React from 'react';
import TestiMonialsDetails from './Testimonial.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from './Assets/Ellipse6.svg';
import './testimonials.css'
import Ramit from './images/ramit.png';
import Nikhil from './images/nikhil.png';
import Kirubakar from './images/kirubakar.png';

const TestiMonials = () => {

    const testiMonials = [
        {
            id: 1,
            number:1,
            address: "Past Delegate",
            description: "NSS IIT-Roorkee gave me a remarkable experience! It was a comprehensive system with supportive management and an awesome team atmosphere like a family. I honed my leadership, communication, management, and networking skills, and it was a great platform to improve myself. Thank you, National Social Summit IIT-R!",
            name:"Ramit Jain",
            img:Ramit
          },
          {
            id: 2,
            number:2,
            address: "Past Delegate",
            description: "Working for the National Social Summit was a truly amazing experience. Valuable connections, teamwork with amazing students, overcoming challenges and a place to learn with enthusiasm, it had it all. The challenges we faced along the way only served to further deepen our sense of teamwork and camaraderie, and the satisfaction of overcoming these hurdles in the pursuit of making the event a resounding success was a feeling like no other.",
            name:"Kirubakar",
            img:Kirubakar
          },
          {
            id: 3,
            number:3,
            address: "Past Delegate",
            description: "Being a part of the National Social Summit was a fantastic experience! Diverse work, public interaction, flexible hours, and working with students made it enjoyable and a great opportunity for growth. It is the type of work I'd like to do more of in the future. Highly recommended for students seeking extra hours and a chance to meet new people!",
            name : "Nikhil Mishra",
            img:Nikhil
          },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <div className="miniTitle text-center">Testimonials</div>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                <div class="item">
                                        <div class="shadow-effect">
                                            <img alt='' class="img-circle" src={userPic} />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Priyanka Gupta</h5>
                                            <small>Past Delegate</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._id} />
                                            
                                            )
                                        })
                                    }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;