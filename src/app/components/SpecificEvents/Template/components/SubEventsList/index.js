import React, { Component } from "react";


import Entry from "./Entry";
import emojipedia from "./emojipedia";



function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      
      title={emojiTerm.title}
      content={emojiTerm.content}
    />
  );
}

class SubEventsList extends Component {

  render() {

   const {data} = this.props
    return (
      <div className="" style={{marginTop :"10rem", marginBottom:"10rem"}}>
       {data.map(createEntry)}
            
      </div>
    );
  }
}

export default SubEventsList;