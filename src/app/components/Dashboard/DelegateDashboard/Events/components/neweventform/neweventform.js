import React from "react";
import "./neweventform.css"
import Cross from '../../assets/Cross.svg'

// slr se bntaa hai yeh

const neweventform = () => {
  return (
    <div className="formWrapper">
      <div className="TeamName">
        <div className="TeamNameHeading">Team Name</div>
        <input className="TeamInput" />
      </div>
      <div className="TeamInfo">
        <div className="TeamInfoLeft">
          <div className="Leader">
            <div className="HeadingLeader">
              Leader<span>*</span>
            </div>
            <div className="LeaderInfo">
              <div className="LeaderName">Leader Name</div>
              <div>
                <button className="CrossButton"
                  style={{
                    height:'100%',
                    backgroundImage : `url(${Cross})`,
                    backgroundPosition : 'center',
                    backgroundSize : 'contain',
                    backgroundRepeat : 'no-repeat'
                  }}
                >
                  
                </button>
              </div>
            </div>
          </div>
          <div className="Participants">
            <div className="HeadingLeader">Participants</div>
            <div className="LeaderInfo">
              <div className="LeaderName">Participant Name</div>
              <div>
              <button className="CrossButton"
                  style={{
                    height:'100%',
                    backgroundImage : `url(${Cross})`,
                    backgroundPosition : 'center',
                    backgroundSize : 'contain',
                    backgroundRepeat : 'no-repeat'
                  }}
                >
                  
                </button>
              </div>
            </div>
            <div className="AddButton">
              <button className="Addbutton">+ Add Participant</button>
            </div>
          </div>
        </div>
        <div className="TeamInfoRight">
          <div className="InputFormRight">
            <div className="InputFormName">Name</div>
            <input className="FormInput" />
          </div>
          <div className="InputFormRight">
            <div className="InputFormName">Summit ID</div>
            <input className="FormInput" />
          </div>
          <div className="InputFormRight">
            <div className="InputFormName">Contact Number</div>
            <input className="FormInput" />
          </div>
          <div>
            <button className="DoneButton">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default neweventform;
