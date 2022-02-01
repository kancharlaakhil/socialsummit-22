import React from "react";
import ProfileComp from "./ProfileComp";
import FirstComp from "./FirstComp";
import './index.css';
function index(props) {

  return (
    <React.Fragment>

<div className="main-container">
      <div>
        <div>
          <FirstComp />
        </div>
        <div
          className="row"

        >
          <div className="col-md-4 col-sm-12"></div>
          <div className="col-md-8 col-sm-12">
            <ProfileComp />
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
    
  );
}

export default index;