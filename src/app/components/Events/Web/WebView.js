import React from "react";
import Header from "./Header";
import EventLinks from "./EventLinks";
import EventContent from "./EventContent";
import "./css/index.css";

function WebView() {
  return (
    <>
    <Header/>
    <div className="events-container">
        <div className=" row events-header"
            style={{
                height : '10%'
            }}
        >

           <Header></Header>
        </div>
        <div className="row"
            style={{
                height : '90%'
            }}
        >
            <div className="col-sm-2 list-component">
               <EventLinks/>
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-8 event-content-container">
                <EventContent/>
            </div>
        </div>
    </div>
    </>
  );
}

export default WebView;