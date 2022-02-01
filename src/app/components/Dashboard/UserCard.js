import React from "react";
import img from "../../assets/images/p1.png";
import  {useWidthAndHeight}  from "../../../hooks/useWidthAndHeight";
import "./Dashboardcss/UserCard.css";

function UserCard(props) {
  const { height, width } = useWidthAndHeight();
  return (
    <div style={{height : '100vh'}}>
    <div className="container h-25">
        <div className="row align-items-start h-100">
            <div className="col-md-1 h-100"
                style={{
                    borderRadius : '8px',
                    backgroundColor :'#222222',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                   
                }}
            />

           <div className="col-md-1"></div>
            <div className="col-md-3 h-100">
                <div className="row user-name">Mukul Dhiman</div>
                <div className="row user-role"> Campus Ambassador </div>
                <div className="row link h-50 d-inline-flex justify-content-between">
                    <div className="col-md-6">Profile Completion</div>
                    <div className="col-md-6">Logout</div>
                </div>
            </div>

        </div>
     
       


    </div>
    </div>
          
 
  );
}

export default UserCard;