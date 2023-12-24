import React from 'react';
import './testimonial.css';
import InvertedComma from './Assets/inv.svg';
const testiMonialsDetail = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    // console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="item">
            <div className="shadow-effect">
            </div>
            <div className="testimonial-name">
                <img alt='' className='inv' src={InvertedComma} />
                <br />
                <p>{description}</p>
            </div>
                <img alt='' className="img-circle" src={img} />
                <h2 className='test-name'>{name}</h2>
                <p className='test-post'>{address}</p>
        </div>
    );
};

export default testiMonialsDetail;
