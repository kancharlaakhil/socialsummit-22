import React from "react";
import DetailsComp from "./DetailsComp";
import ScrollTable from "./ScrollTable";
import  {useWidthAndHeight}  from "../../../../hooks/useWidthAndHeight";
import "./ProfileComp.css";
function ProfileComp(props) {
  const { height, width } = useWidthAndHeight();
  return (
    
      <div className="container">
        <div className="row p-1">
          <div id="col-1" className="col-5">
            My Profile
          </div>
          <div id="col-2" className="col-5 offset-2">
            <div className="row justify-content-center">
              <div id="cp"className="col-6">Current Points:</div>
              <div className="col-3"><p id="col-3">850</p></div>
            </div>

          </div>
        </div>
        <hr class="solid"/>
        <div className="row align-items-start p-2">
          <div className="col-12 col-md-5" style={{
           
            border : '2px',
            borderRadius : '5px'
          }}>
            <DetailsComp />
          </div>
          <div className="col col-sm-2 col-md-0" style={{
            height : '3px',
            backgroundColor : '#fafafa'
          }}></div>

            <div className="col-12 col-md-5"  style={{
            border : '2px',
            borderRadius : '5px'
          }}>
              <ScrollTable />
            </div>
         
        </div>
      </div>
     
    
  );
}

export default ProfileComp;