import React from 'react';

import MyTasksHeader from './MyTasksHeader';
import Details from './Details';



import './css/index.css'

const MyTasks = () => {

  /*  const data = [
        {
            detailName : 'Task #4',
            detailValue : 'Share the Sociothon poster among these platforms and upload theem here. '   
        },
        {
            detailName : 'Date Issued',
            detailValue : '1st Feb 2022 '   
        },
        {
            detailName : 'Deadline',
            detailValue : '10 Feb 2022 ; 11:59pm'   
        },
        {
            detailName : 'Points to gain',
            detailValue : '20 points (5 points each)'   
        }]
*/

        const data = []
    return (
        <div className='mytasks-container p-0 m-0 h-100'>
            <div className='row mytasks-header'>
                <MyTasksHeader/>
            </div>
            <div className='row mytasks-component'>

                <div className='col-md-6  details-component'>
                    <Details details={data}></Details>
                </div>
                <div className='col-md-6 upload-component'>
                    
                </div>
            </div>

        </div>
    );
}

export default MyTasks;