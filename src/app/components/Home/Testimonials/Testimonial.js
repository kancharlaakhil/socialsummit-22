import React from 'react';
import './testimonial.css'
import InvertedComma from './Assets/inv.svg';
const testiMonialsDetail = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    // console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="item">
            <div className="shadow-effect">
            </div>
            <div className="testimonial-name d-flex">
            <div style={{marginTop:"10%"}}>
            
            <img alt='' className="img-circle" src={img} />
            <h2 className='test-name'>{name}</h2>
            {/* <p className='test-post'>{address}</p> */}
            </div>
            <div style={{width:"80%", textAlign:'justify', margin:"20px"}}>
                <img alt='' className='inv' src={InvertedComma} style={{textAlign:"left"}} /> 
                <p>{description}</p>  
                </div>             
                </div>
        </div>
    );
};

export default testiMonialsDetail;