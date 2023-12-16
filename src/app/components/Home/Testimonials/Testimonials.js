import React from 'react';
import TestiMonialsDetails from './Testimonial.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from './Assets/Ellipse6.svg';
import './testimonials.css'
// import Ramit from './images/ramit.png';
// import Nikhil from './images/nikhil.png';
import pushkar from './images/pushkar_img.png';


const TestiMonials = () => {

    const testiMonials = [
        {
            id: 1,
            number:1,
            address: "Past Delegate",
            description: "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented.",
            img:pushkar,
            name:"Pushkar Singh Dhami"
          },
          {
            id: 2,
            number:2,
            address: "Past Delegate",
            description: "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented.",
            img:pushkar,
            name:"Pushkar Singh Dhami"
          },
          {
            id: 3,
            number:3,
            address: "Past Delegate",
            description: "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented.",
            img:pushkar,
            name:"Pushkar Singh Dhami"
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