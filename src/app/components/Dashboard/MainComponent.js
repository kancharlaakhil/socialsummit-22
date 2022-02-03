import React from 'react';
import './Dashboardcss/MainComponent.css'

const MainComponent = ({selectedOption, options}) =>{

    console.log(options[selectedOption].componentName)

   return(
       <div className="main-component-container">
           
        

       </div>
   )

}

export default MainComponent;