import React from "react";
import EventCard from "./EventCard";
// import actionimg from '..//images/action plan.png'
import ActionPlan from "../images/action plan.svg";
import MUN from "../images/MUN.svg";
// import SocialConclave from "../images/socialConclave.svg";
import Sociothon from "../images/sociothon.svg";
import PolicyCase from "../images/Policy Case.svg";
import WorkPresentation from "../images/Work Presentation.svg";
import CaseStudy from "../images/Case study.svg";
import Workshop from "../images/workshop.svg";
import NukkadNatak from "../images/Nukkad Natak.svg";
import Debate from "../images/Debate.svg";
import TreasureHunt from "../images/Treasure Hunt.svg";
import PreSummit from "../images/Pre Summit events.svg";

import "./css/EventContent.css";

function EventContent(props) {
  const data = [
    {
      id: 1,
      image: ActionPlan,
      eventLink : "Action Plan",
      name: "Action Plan",
      rulebook:
        "https://drive.google.com/file/d/1feGRr4-fBLLQrRrjvuYgb5YDetv5hh0p/view?usp=share_link",
      prizeWorth: "10K",
      description:
        " This competition provides a platform for those entrepreneurs who bring feasible solutions to real-time problems with their innovative ideas. The competition will be of two rounds and is open for all age groups. A maximum of 4 members in a team can participate in the competition.",
        perk1:"Incubation opportunity worth 1 Crore.",
        perk2:"Rental space in Delhi for 1 month.",
        perk3:"AWS credits, software subscription worth 10 lakhs.",
        perk4:"30 min mentorship session.",
        perk5:"Networking opportunity.", 
    },
    {
      id: 2,
      image: MUN,
      name: "Model United Nations",
      eventLink : "MUN",
      rulebook : "https://drive.google.com/file/d/17eTa4YeqOLRUP5vsdhflLZWiHVFmcWqj/view?usp=share_link",
      prizeWorth : "120K",
      description:
        "This event provides a platform for the students to have practical experience of diplomacy and allow them to be the representative of a country or an organization and let them speak up about the issues and find their solutions along with other delegates.",
        perk1:"Skill Enhancement Courses",
        perk2:"Winners will be featured on our social media platforms.",
        perk3:"Attendee kit will be provided to all participants.",
        perk4:"Exciting Prizes",
        perk5:"Networking opportunity.", 
    },
{
      id: 4,
      image: Sociothon,
      eventLink : "Sociothon",
      prizeWorth: "50K",
      name: "Sociothon",
      rulebook:
        "https://drive.google.com/file/d/1mwQQfkV59VqRqdc_jtGe873qDDLMR5uA/view?usp=share_link",
      description:
        "Sociothon is an event where participants will be provided with a problem statement and they will be asked to present their solutions by critically analysing the issue. This event aims to enhance the creative minds of the participants.",
        perk1:"Skill Enhancement Courses",
        perk2:"Winners will be featured on our social media platforms.",
        perk3:"Attendee kit will be provided to all participants.",
        perk4:"Exciting Prizes",
        perk5:"Networking opportunity.", 
    },{
      id: 5,
      image: PolicyCase,
      eventLink : "PolicyCase",
      rulebook:
"https://drive.google.com/file/d/19VD_8nKUUE2NYI_4JSMYPb7vAs1FmqJt/view?usp=share_link",
      prizeWorth: "50K",
      name: "Policy Case Competition",
      link1:
        "https://drive.google.com/file/d/1LNVxt6bMusyVC07Pfng183rDK8iMzHPt/view?usp=sharing",
      link2:
        "https://drive.google.com/file/d/1owN_u3XH-uOQxDnPnDGDZu7qxO25OGAB/view?usp=sharing",
      description:
        "As the name suggests this competition encourages the students to become policymakers by critically analysing the present issues and evaluating the faults in existing policies and finally coming up with great ideas to solve these issues. This is a 2 round competition.",
        perk1:"Skill Enhancement Courses",
        perk2:"Winners will be featured on our social media platforms.",
        perk3:"Attendee kit will be provided to all participants.",
        perk4:"Exciting Prizes",
        perk5:"Networking opportunity.", 
    },{
      id: 6,
      image: WorkPresentation,
      eventLink : "Innovision",
      name: "Work Presentation",
      prizeWorth: "50K",
      description:
        "In this competition, we invite every NGO to showcase their past works towards society. This also allows us to express our gratitude to them. The competition will be of 2 rounds with each team consisting of up to 4 members.",
      rulebook : "https://drive.google.com/file/d/1F2MHHf-e5ZAhqrOfQerHIFv2AHnIAXd2/view?usp=share_link",
      perk1:"Skill Enhancement Courses",
      perk2:"Winners will be featured on our social media platforms.",
      perk3:"Attendee kit will be provided to all participants.",
      perk4:"Exciting Prizes",
      perk5:"Networking opportunity.", 
      },{
      id: 7,
      image: CaseStudy,
      eventLink : "CaseStudy",
      name: "Case Studies",
      rulebook:
        "https://drive.google.com/file/d/1xy0_8DCq9p_551Hn0x3mxJqD_ym6fR72/view?usp=share_link",
        perk1:"Skill Enhancement Courses",
        perk2:"Winners will be featured on our social media platforms.",
        perk3:"Attendee kit will be provided to all participants.",
        perk4:"Exciting Prizes",
        perk5:"Networking opportunity.", 
      link1:
        "https://drive.google.com/file/d/1dk0GtCOkyIQF8Kha3gAPJep_vLSRbme_/view?usp=sharing",
      link2:
        "https://drive.google.com/file/d/1WLFKxWhf4qWv0S9tAsMuSc65_TOlagXL/view?usp=sharing",
      prizeWorth: "75K",
      description:
        "This Case Study Competition is the best way to understand the real-time issues and come up with the best feasible solutions to them. This case study competition will go in two rounds. The shortlisted ones in the 1st round will proceed to the 2nd round.",
    },{
      id: 8,
      image: Workshop,
      eventLink : "Workshop",
      name: "Workshops",
      rulebook:"https://drive.google.com/file/d/10xMG_Szi6D7x7_RTXK3Vv-emShhpm6cN/view?usp=share_link",
      description:
        "Like every year this year also the National Social Summit 2023, IIT Roorkee, is going to organize various workshops to provide hands-on experiences on different social aspects and formulate socially active mindsets among people.",
        perk1:"Skill Enhancement Courses",
        perk2:"Winners will be featured on our social media platforms.",
        perk3:"Attendee kit will be provided to all participants.",
        perk4:"Exciting Prizes",
        perk5:"Networking opportunity.", 
    },
    {
      id: 9,
      image: NukkadNatak,
      eventLink : "Abhivyakti",
      name: "Nukkad Natak",
      rulebook:
        "https://drive.google.com/file/d/1H1bdpd6bWKYSx5yrxrq5N0jO4Fsa1Gr-/view?usp=share_link",
      prizeWorth: "15K",
      description:
        "It is a street-play competition wherein you speak in the lingo of the common folks to emphasise socially relevant issues in our society. With the aid of shouts, chants, drums, and catchy songs, it is an extremely effective way of theatrical art to convey a social or political message. ",
        perk1:"Skill Enhancement Courses",
        perk2:"Winners will be featured on our social media platforms.",
        perk3:"Attendee kit will be provided to all participants.",
        perk4:"Exciting Prizes",
        perk5:"Networking opportunity.", 
    },{
      id: 10,
      image: Debate,
      eventLink : "TurnCoat",
rulebook:"https://drive.google.com/file/d/1kz_1qN1AQ5jqiTMheGz7pdYH0-C-hNry/view?usp=sharing",
      prizeWorth: "15K",
      name: "Debate",
      description:
        "This is a form of debate where one states both the pros and cons of a situation by switching sides after a specific duration. The competition is of 3 rounds. The participants are allowed to present their views in either English or Hindi.",
        perk1:"Skill Enhancement Courses",
        perk2:"Winners will be featured on our social media platforms.",
        perk3:"Attendee kit will be provided to all participants.",
        perk4:"Exciting Prizes",
        perk5:"Networking opportunity.", 
    },
    {
      id: 11,
      image: TreasureHunt,
      eventLink : "TreasureHunt",
      rulebook:
        "https://drive.google.com/file/d/15-DxTlDVxryACIemtoDfjwInf4rC5Qpw/view?usp=sharing",
      prizeWorth: "10K",
      name: "Treasure Hunt",
      description:
        "This is a fun activity in which an individual or a team solves clues for further hints and finally, the one who becomes the first to solves all the puzzles finds the treasure and wins the game. The game will be 2 rounds.",
        perk1:"Skill Enhancement Courses",
        perk2:"Winners will be featured on our social media platforms.",
        perk3:"Attendee kit will be provided to all participants.",
        perk4:"Exciting Prizes",
        perk5:"Networking opportunity.", 
    },{
      id: 12,
      image : PreSummit,
      eventLink : "PreSummitEvents",
      name: "Pre Summit Events",
      description:
        "To merge you all in the vibe of our social fest the National Social Summit 2023, we are presenting you with some amazing pre-summit events like Pixels, Caricature, Microfiction, Meme making competition, and Inquisition. These fun engaging events will give you all a glimpse of our Summit. Come and show up your talents and be a part of this rich legacy of the National Social Summit.",
        rulebook:"https://drive.google.com/file/d/1h5a3fxGpPA5F0cy9PSwdbk7ABnZ24wuk/view?usp=share_link",
        perk1:"Skill Enhancement Courses",
        perk2:"Winners will be featured on our social media platforms.",
        perk3:"Attendee kit will be provided to all participants.",
        perk4:"Exciting Prizes",
        perk5:"Networking opportunity.", 
    },
  ];

  return (
    <div className="EventContent">
      {data.map((element) => {
        return (
          <div id={element.id} className="contain-card">
            <EventCard
            key={element.id}
            name={element.name}
            description={element.description}
            id={element.id}
            image ={element.image}
            rulebook={element.rulebook}
            prizeWorth={element.prizeWorth}
            link1={element.link1}
            link2={element.link2}
            eventLink={element.eventLink}
            perk1={element.perk1}
            perk2={element.perk2}
            perk3={element.perk3}
            perk4={element.perk4}
            perk5={element.perk5}
          />
          </div>
        );
      })}
    </div>
  );
}

export default EventContent;

//     <div className="eright-container">
//   <div className="eright-header">
//     <div className="rhl"><h1>Action Plan
//       </h1>
//       <p>19th Mar’22 - 20th Mar’22</p></div>
//     <div className="rhr">Prize Worth : <span>10k</span> </div>
//   </div>
//   <div className="events-body">
//   This competition provides a platform for those entrepreneurs who bring feasible solutions to real-time problems with their innovative ideas. The competition will be of two rounds and is open for all age groups. A maximum of 4 members in a team can participate in the competition.
//   </div>
//   <div className="perksandimg">
//   <div className="perks">
//     <h1>Perks</h1>
//     <ul>
//       <li>Incubation opportunity worth 1 Crore.


// </li>

//       <li>Rental space in Delhi for 1 month.</li>
//       <li>AWS credits, software subscription worth 10 lakhs.</li>
//       <li>30 min mentorship session.</li>
//       <li>Networking opportunity.</li>
//     </ul>
//     <button className="register">
//       Register
//     </button>
//     <button className="rulebook">
//       RuleBook
//     </button>
//   </div>
//   <img src={actionimg} alt="" />
//   </div>
// </div>