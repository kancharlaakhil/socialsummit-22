import React, { Component } from "react";

import Entry from "./Entry";
import emojipedia from "./emojipedia";
import "./Socio.css";
function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      title={emojiTerm.title}
      content={emojiTerm.content}
    />
  );
}

const perks = [
  "Incubation opportunity worth 1 Crore",
  "Rental office space in Delhi for a month",
  "Networking opportunity ",
  "30 min Mentorship session with experts",
];

const EventPartners = [
  {
    key: 1,
    image: " ",
  },
  {
    key: 2,
    image: " ",
  },
  {
    key: 3,
    image: " ",
  },
];

class SocioContent extends Component {
  render() {
    return (
      <div className="">
        {emojipedia.map(createEntry)}
        <div classname=" th-specific-events-perks">
          <h1>Perks</h1>
          <ul>
            {perks.map((ele) => {
              return <li>{ele}</li>;
            })}
          </ul>
        </div>
        <div className="th-specific-events-eventPartners">
          <h1>Event Partners</h1>
          {perks.map((ele) => {
            return (
              <div className="th-specific-events-eventinside">
                <image src={ele.image} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SocioContent;
