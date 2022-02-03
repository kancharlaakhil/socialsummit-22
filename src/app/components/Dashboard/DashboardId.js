import React from 'react';

import './Dashboardcss/DashboardId.css';


const DashboardId = (props) => {
    return (
        <div style={{height : '100vh'}}>
        <div className="dashboard-heading-container" style={{
            height : '20%',
            padding : '1.5rem',
            background : 'none'
            }}>
            <div className='row h-75 dashboard-text d-flex align-self-end'>
                Dashboard
            </div>
            <div className='row h-25 ca-id-text'>
                #SOCIALSUMMIT-ID
            </div>
               
    
            </div>
         
           
    
    
       
        </div>
    )
}

export default DashboardId;