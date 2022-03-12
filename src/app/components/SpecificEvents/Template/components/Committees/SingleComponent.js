import React from 'react';

import './css/SingleComponent.css'

const SingleComponent = ({ele}) => {
    return(
        <div className="committee-card">
        <div className="committee-card-image"
          style={{
            height : '40%',
            width :"100%",
            backgroundImage : `url(${ele.image})`,
            backgroundSize :'contain',
            backgroundPosition:"center",
            backgroundRepeat :"no-repeat"
          }}
        >
          
        </div>
        <div className="committee-card-description" style={{ height : '40%'}}>
          <p>{ele.description}</p>
        </div>

        <div className='committee-card-buttons d-flex' style={{ height : '15%'}}>
          <div className='button' style={{ cursor :"pointer"}}>
            <a href={`${ele.button1Link}`}>
            {ele.button1Name}
            </a>
          </div>
          <div className='button' style={{cursor :"pointer"}}>
          <a href={`${ele.button2Link}`}>
            {ele.button2Name}
            </a>
          </div>
        </div>
      </div>
    )
}

export default SingleComponent;