import React from 'react';

import ProfileNew from './ProfileNew'

import './Dashboardcss/MainComponent.css'

const MainComponent = ({selectedOption, options}) =>{

    console.log(options[selectedOption].componentName)

   return(
       <div className="main-component-container">
           
        <ProfileNew></ProfileNew>

       </div>
   )

}

export default MainComponent;