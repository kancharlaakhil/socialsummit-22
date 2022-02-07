import React from 'react';

import './css/mobile-navbox.css'

const SingleComponent = ({componentName, selected}) =>{

    
    const backgroundColor = selected ? `#663AA3` : `#fafafa`;
    const fontColor = selected ? `#FFFFFF` : `#222222`

  
    
    return (
        <div className='mobile-single-component-container d-flex align-items-center justify-content-center'
            style={{
                backgroundColor : `${backgroundColor}`,
                color : `${fontColor}`
            }}
        >
           {componentName}
        </div>

       
    )
}

export default SingleComponent