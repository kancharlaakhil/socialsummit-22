import React from 'react';
import Cross from './images/participantCross.svg'
import "./css/SingleMemberComponent.css"

const SingleMemberComponent = ({name}) => {
    return(
        <div className='single-member-component-container'>
            <div className='row d-flex justify-content-between' style={{ width : '100%'}}>
                <div className='col-9'>{name}</div>
                <div className='col-2' style={{
                   
                    backgroundImage : `url(${Cross})`,
                    backgroundSize : 'contain',
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat'
                }}></div>
            </div>

        </div>
    )
}

export default SingleMemberComponent