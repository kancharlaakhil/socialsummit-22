import React from 'react';

import './css/details.css'

const singleDetail = (detailName, detailValue) => {
    return (
        <div className='row'>
                <div className='col-md-3'>{detailName}</div>
                <div className='col-md-1'> : </div>
                <div className='col-md-8'>{detailValue}</div>
          </div>
    )
}

const Details = ({details}) => {
    return(
        <div className='details-component'>
            {
                details.map((ele) => {
                    return singleDetail(ele.detailName, ele.detailValue)
                })
            }

        </div>
    )
}

export default Details;
