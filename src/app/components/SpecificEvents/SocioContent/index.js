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

class SocioContent extends Component {
  render() {
    return (
      <div className="">
       {emojipedia.map(createEntry)}
            
      </div>
    );
  }
}

export default SocioContent;