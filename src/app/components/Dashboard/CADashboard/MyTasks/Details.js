import React from 'react';


import './css/details.css'

const singleDetail = (detailName, detailValue) => {

    const color = detailName === 'Points to gain' ? '#663AA3' : '#444444';
    const weight = detailName === 'Points to gain' ? '600' : 'normal'

    

    return (
        <div className='row single-detail'>
                <div className='col-md-3'>{detailName}</div>
                <div className='col-md-1'> : </div>
                <div className='col-md-8'
                    style={{
                        color : `${color}`,
                        fontWeight : `${weight}`
                    }}
                
                >{detailValue}</div>
          </div>
    )
}

const Details = ({tasks, index}) => {

    const details = [
        {
            detailName : `Task #${index+1}`,
            detailValue : tasks[index]?.description
        },{
            detailName : 'Date Issued',
            detailValue : tasks[index]?.issuedDate   
        },
        {
            detailName : 'Deadline',
            detailValue : tasks[index]?.deadlineDate 
        },
        {
            detailName : 'Points to gain',
            detailValue : `${tasks[index]?.totalPoints} points (${tasks[index]?.eachPoints} each)`  
        }

    ]


   
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