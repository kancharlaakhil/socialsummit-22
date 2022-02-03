import React , {useState} from 'react';
import MainComponent from './MainComponent';
import NavBox from './Navbox'
import UserCard from './UserCard'
import DashboardId from './DashboardId';
import ProfileNew from './ProfileNew'


import './Dashboardcss/index.css'

import isSelectedProfile from "./assets/isSelectedProfile.svg";
import isSelectedMyTasks from "./assets/isSelectedMyTasks.svg";
import isSelectedDeadlines from "./assets/isSelectedDeadlines.svg";
import isSelectedUpdates from "./assets/isSelectedUpdates.svg";
import isSelectedLeaderboard from "./assets/isSelectedLeaderboard.svg";

import isNotSelectedProfile from "./assets/isNotSelectedProfile.svg";
import isNotSelectedMyTasks from "./assets/isNotSelectedMyTasks.svg";
import isNotSelectedDeadlines from "./assets/isNotSelectedDeadlines.svg";
import isNotSelectedUpdates from "./assets/isNotSelectedUpdates.svg";
import isNotSelectedLeaderboard from "./assets/isNotSelectedLeaderboard.svg";


const Dashboard = (props) => {

    const options = [
        {
            componentName : "Profile",
            isSelectedIcon : isSelectedProfile,
            isNotSelectedIcon : isNotSelectedProfile
        },
        {
            componentName : "My Tasks",
            isSelectedIcon  : isSelectedMyTasks,
            isNotSelectedIcon : isNotSelectedMyTasks
        },
        {
            componentName : "Updates",
            isSelectedIcon  : isSelectedUpdates,
            isNotSelectedIcon : isNotSelectedUpdates
        },
        {
            componentName : "Deadlines",
            isSelectedIcon  : isSelectedDeadlines,
            isNotSelectedIcon : isNotSelectedDeadlines
        },
        {
            componentName : "Leaderboard",
            isSelectedIcon  : isSelectedLeaderboard,
            isNotSelectedIcon : isNotSelectedLeaderboard
        }
       

    ]

    const [selectedIndex, setSelectedOption] = useState(0);

    const onNavbarClick = (optionIndex) =>{
        console.log(optionIndex)
        setSelectedOption(optionIndex);

    }


  return(
      <div className='page-container' style={{height : '100vh', background : 'none', paddingLeft:"3rem", paddingRight:"3rem"}}>
          
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
            <NavBox options={options} selectedIndex={selectedIndex} onComponentClick = {onNavbarClick}></NavBox>
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

export default Dashboard;