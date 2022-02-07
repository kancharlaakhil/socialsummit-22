import React from 'react';
import MainComponent from './MainComponent';
import NavBox from './Navbox'
import UserCard from './UserCard'
import DashboardId from './DashboardId';



import './Dashboardcss/index.css'



const DashboardWebView = ({options, selectedIndex, onNavboxClick}) => {


  return(
      <div className='page-container' style={{height : '100vh', background : 'none', paddingLeft:"3rem", paddingRight:"3rem", paddingTop:"6rem"}}>
          
          <div className='row h-25 d-flex justify-content-between'>
            <div className='col-md-3'>
               <DashboardId></DashboardId>
            </div>
            <div className='col-md-4'>
                <UserCard/>

            </div>
          </div>
          <div className='row h-50'>
            <div className='col-md-2' style={{
                width: '20.83325%',
                flex: '0 0 20.83325%',
                maxWidth: '20.83325%'
                }}>
            <NavBox options={options} selectedIndex={selectedIndex} onComponentClick = {onNavboxClick}></NavBox>
            </div>
            
            <div className='col-md-9' style={{
                width: '79.16635%',
                flex: '0 0 79.16635%',
                maxWidth: '79.16635%'
                }}>
                <MainComponent selectedOption={selectedIndex} options={options}>
                   
                </MainComponent>
            </div>
        </div>
          
      </div>
  )
}

export default DashboardWebView;