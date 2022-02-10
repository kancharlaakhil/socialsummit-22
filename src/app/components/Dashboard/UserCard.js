import React from "react";

import "./Dashboardcss/UserCard.css";

import { useHistory } from 'react-router-dom'

//placeholder export

import UserProfiePlaceholder from "../../assets/images/UserProfilePlaceholder.png"

import { connect } from 'react-redux'
import { LogoutAuthAction } from "../../../redux/actions/AuthAction";

function UserCard({user, logout}) {

    const history = useHistory()

    const Role = (user.role==='ca') ? 'Campus Ambassador' : 'Delegate'
  
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
                <div className="row user-name">{user.name}</div>
                <div className="row user-role"> {Role} </div>
                <div className="row link h-50 ">
                    <div className="col-sm-8 p-0 d-flex align-self-end">Profile Completion</div>
                    <div 
                        className="col-sm-4 p-0 d-flex justify-content-end align-self-end"
                        onClick = {() => {
                          
                            logout(history);

                        }}
                        >Logout</div>
                </div>
            </div>

        </div>
     
       


    </div>
    </div>
          
 
  );
}

const mapStateToProps = (state) => {
  
    return {
      user : state.authState.user,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        logout : (history) => {
            dispatch(LogoutAuthAction(history))
        }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
