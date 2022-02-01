import React from 'react';
import Profile from './Profile'

const MainComponent = ({selectedOption, options}) =>{

    const ProfileComponent = <Profile/>;
    

  
    return (
        <div>
        {`${options[selectedOption].name}Component`}
   </div>
    )
   ;

}

export default MainComponent;