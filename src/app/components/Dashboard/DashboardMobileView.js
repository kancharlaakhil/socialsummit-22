import React, { useState } from 'react';

import MobileNavbox from './MobileNavbox';
import MobileUserCard from './MobileUserCard';

import './Dashboardcss/index.css'
import DashboardId from './DashboardId';



const DashboardMobileView = ({options, selectedIndex, onNavboxClick}) => {

    const [open, setOpen] = useState(false);
   
    const onUserCardClick = () =>{
        setOpen(!open)
    }

    return(
        

<div className='page-container' style={{height : '100vh', paddingLeft:"0.25rem", paddingRight:"0.25rem"}}>
             
              
              <div className='row h-25 d-flex align-items-end justify-content-between'>
                <div className='col-8'>
                   <DashboardId isMobile={true}></DashboardId>
                </div>
                <div className='col-4' >
                  <MobileUserCard open={open} onClick={onUserCardClick}></MobileUserCard>    
                </div>
              </div>
              <div className='row'>
                <MobileNavbox options={options} selectedIndex={selectedIndex} onComponentClick = {onNavboxClick}></MobileNavbox>
             </div>
            </div>
      
        
    )
};

export default DashboardMobileView