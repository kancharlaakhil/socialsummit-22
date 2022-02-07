import React from "react";

import Entry from "./Entry";
import emojipedia from "./emojipedia";

import '../css/registeredDelegates.css'



function createEntry(emojiTerm) {
  return (
    <Entry key={emojiTerm.id} status={emojiTerm.status} name={emojiTerm.name} />
  );
}



function RegisteredDelegates()  {

    return (
      <div className="th-home-dashboard">
        <div className="th-home-dashboard-header">
          <div>
            Names
          </div>
          <div>
            Payment Status
          </div>
        </div>
        <div className="th-home-dashboard-body">
          {emojipedia.map(createEntry)}
          </div>
      </div>
        
    );
  
}

export default RegisteredDelegates;
