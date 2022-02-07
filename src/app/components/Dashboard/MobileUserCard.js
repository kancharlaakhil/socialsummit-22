import React from 'react';

import "./Dashboardcss/UserCard.css";

//placeholder export

import UserProfiePlaceholder from "../../assets/images/UserProfilePlaceholder.png"

const MobileUserCard = ({open, onClick}) => {


    return (

        open?
        
        (<div className='modal'>
            <div className='modal-content mobile-user-container' onClick={e => e.stopPropagation()}>
            <div className="container" style={{
            paddingRight : '1rem', 
            paddingLeft : '1rem',
            height : '7.5rem'
        }}>
            <div className="row h-75 justify-content-between">

            <div className="col-8">

                <div className="row user-name">Mukul Dhiman</div>
                <div className="row user-role"> Campus Ambassador </div>
            </div>
                <div className="col-4 h-75"
                    style={{
                        borderRadius : '8px',
                        backgroundImage :`url(${UserProfiePlaceholder})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        overflow: 'hidden',
                        backgroundPosition:'center'
                       
                    }}
                    onClick = {()=>{
                        onClick()
                    }}
                />
    
              </div>
              <div className = "row link h-25 justify-content-between">
                    <div className="col-8 p-0">Profile Completion</div>
                    <div className="col-4 p-0 d-flex justify-content-end">Logout</div>
              </div>
    
            </div>

            </div>
        </div>
        
        
         ):(
         
         <div style={{
            height : '6rem'
        }}>
        <div className="col-12 h-75"
        style={{
            borderRadius : '8px',
            backgroundImage :`url(${UserProfiePlaceholder})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            overflow: 'hidden',
            backgroundPosition:'center'
           
        }}
        onClick = {()=>{
            onClick()
        }}
    />

    
            </div>
     
            
         )

           
    
    
     

      
    )
}

export default MobileUserCard;
