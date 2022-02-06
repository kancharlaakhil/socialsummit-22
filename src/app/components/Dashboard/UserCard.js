import React from "react";

import "./Dashboardcss/UserCard.css";

//placeholder export

import UserProfiePlaceholder from "../../assets/images/UserProfilePlaceholder.png"

function UserCard(props) {
  
  return (
    <div style={{height : '100vh'}}>
    <div className="user-container" style={{height : '20%'}}>
        <div className="row align-items-start h-100">
            <div className="col-sm-3 h-100"
                style={{
                    borderRadius : '8px',
                    backgroundImage :`url(${UserProfiePlaceholder})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                    backgroundPosition:'center'
                   
                }}
            />

           <div className="col-sm-1"></div>
            <div className="col-sm-8 h-100">
                <div className="row user-name">Mukul Dhiman</div>
                <div className="row user-role"> Campus Ambassador </div>
                <div className="row link h-50 ">
                    <div className="col-sm-8 p-0 d-flex align-self-end">Profile Completion</div>
                    <div className="col-sm-4 p-0 d-flex justify-content-end align-self-end">Logout</div>
                </div>
            </div>

        </div>
     
       


    </div>
    </div>
          
 
  );
}

export default UserCard;