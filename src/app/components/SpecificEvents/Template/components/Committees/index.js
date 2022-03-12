import React from 'react';

import SingleComponent from './SingleComponent';


import './css/Committees.css'

const Committees = ({data}) => {
    return (
        <div className='committees-component'>
            <div className='committees-container-header d-flex justify-content-center'>Committees</div>
            <div className='committees-container' style={{ margin : '2rem'}}>
            {
                data.map((ele)=> {
                    return(
                        <SingleComponent ele={ele}></SingleComponent>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Committees;