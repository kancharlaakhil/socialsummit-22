import React from 'react';

import './Dashboardcss/DashboardId.css';


const DashboardId = ({isMobile}) => {

    const dashboardTextClass = isMobile ? 'mobile-dashboard-text' : 'dashboard-text';
    const caIdTextClass = isMobile ? 'mobile-ca-id-text' : 'ca-id-text';
    const height = isMobile ? '7.5rem' : '20%';
    const containerHeight = isMobile ? '7.5rem' : '100vh'

    return (
        <div style={{height : {containerHeight}}}>
        <div className="dashboard-heading-container" style={{
            height : {height},
            padding : '1.5rem',
            background : 'none'
            }}>
            <div className={`row h-75 ${dashboardTextClass} d-flex align-self-end`}>
                Dashboard
            </div>
            <div className={`row h-25 ${caIdTextClass}`}>
                #SOCIALSUMMIT-ID
            </div>
               
    
            </div>
         
           
    
    
       
        </div>
    )
}

export default DashboardId;