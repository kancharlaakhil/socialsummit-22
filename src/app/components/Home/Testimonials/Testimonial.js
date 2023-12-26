import React from 'react';
import './testimonial.css';
import InvertedComma from './Assets/inv.svg';
const testiMonialsDetail = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    // console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="item">
        <div className="shadow-effect"></div>
        <div className="testimonial-name d-flex">
          <div className='testi-left' style={{ marginTop: '6%' }}>
            <img alt='' className="img-circle" src={img} />
            <h2 className='test-name'>{name}</h2>
            {/* <p className='test-post'>{address}</p> */}
          </div>
          <div className='testimonial-item-left'>
            <img alt='' className='inv' src={InvertedComma} style={{ alignItems: 'left', display: 'flex', justifyContent: 'left', marginLeft: '-50%' }} />
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
};

export default testiMonialsDetail;
