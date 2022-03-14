import React from "react";
import EventCard from "./EventCard";
import Dummy from "../images/dummy.png";

import ActionPlan from "../images/actionPlan.svg";
import MUN from "../images/mun.svg";
import SocialConclave from "../images/socialConclave.svg";
import Sociothon from "../images/sociothon.svg";
import PolicyCase from "../images/policyCase.svg";
import Innovision from "../images/innovision.svg";
import CaseStudy from "../images/caseStudy.svg";
import Workshop from "../images/Workshop.svg";
import Abhivyakti from "../images/abhivyakti.svg";
import TurnCoat from "../images/turnCoat.svg";
import TreasureHunt from "../images/treasureHunt.png";
import PreSummit from "../images/preSummit.svg";

import "./css/EventContent.css";

function EventContent(props) {
  const data = [
    {
      id: 1,
      image: ActionPlan,
      name: "Action Plan",
      rulebook:
        "https://drive.google.com/file/d/16l_M9f-FqAVOu73CQJ1XnZRCv4E_fAtX/view?usp=sharing",
      prizeWorth: "100K",
      description:
        "This competition provides a platform for those entrepreneurs who bring feasible solutions to real-time problems with their innovative ideas. The competition will be of two rounds and is open for all age groups. A maximum of 4 members in a team can participate in the competition. To know more about the rules and regulations please refer to the Rulebook.",
    },
    {
      id: 2,
      image: MUN,
      name: "Model United Nations",

      rulebook:
        "https://drive.google.com/file/d/1kiDow4lh1lgl4qGtXxpOmSkjQcLCXOH8/view",
      prizeWorth: "120K",

      description:
        "This event provides a platform for the students to have practical experience of diplomacy and allow them to be the representative of a country or an organization and let them speak up about the issues and find their solutions along with other delegates. The detailed instructions and guidelines are provided in the Rulebook.",
    },
    {
      id: 3,
      image: SocialConclave,
      name: "Social Conclave",
      description:
        "This event is mainly focused on the concept of CSR, providing a platform to build a network between NGOs and Companies. The NGOs will bring initiative ideas for social causes and the interested companies can tie up with them by funding them for the implementation of those initiatives practically. Please refer to the rulebook for detailed instructions.",
    },
    {
      id: 4,
      image: Sociothon,
      prizeWorth: "50K",
      name: "Sociothon",
      rulebook:
        "https://drive.google.com/file/d/14xIKXFEM_jycvqNG3bBcW5a8dOCunKaI/view",
      description:
        "Sociothon is an event where participants will be provided with a problem statement and they will be asked to present their solutions by critically analyzing the issue. This event aims to enhance the creative minds of the participants. For more information, please refer to the rulebook provided in the link.",
    },
    {
      id: 5,
      image: PolicyCase,
      rulebook:
        "https://drive.google.com/file/d/1rm_JDDH9dVWrLY6ojVSFeAm9KIhlaieT/view?usp=sharing",
      prizeWorth: "50K",
      name: "Policy Case Competition",
      link1:
        "https://drive.google.com/file/d/1LNVxt6bMusyVC07Pfng183rDK8iMzHPt/view?usp=sharing",
      link2:
        "https://drive.google.com/file/d/1owN_u3XH-uOQxDnPnDGDZu7qxO25OGAB/view?usp=sharing",
      description:
        "As the name suggests this competition encourages the students to become policymakers by critically analyzing the present issues and evaluating the faults in existing policies and finally coming up with great ideas to solve these issues. This is a 2 round competition. The detailed guidelines of the event are provided in the Rulebook.",
    },
    {
      id: 6,
      image: Innovision,
      name: "Innovision",
      prizeWorth: "50K",
      description:
        "In this competition, we invite every NGO to showcase their past works towards society. This also allows us to express our gratitude to them. The competition will be of 2 rounds with each team consisting of up to 4 members. For detailed instructions of the competition do refer to the Rulebook.",
      rulebook:
        "https://drive.google.com/file/d/1WQf9YufAWo02dBZ35u7NLgh2kxYimygc/view?usp=sharing",
    },
    {
      id: 7,
      image: CaseStudy,
      name: "Case Studies",
      rulebook:
        "https://drive.google.com/file/d/11_vXyK4YUE91Ir3ibr2SAtAwqrNa3wFu/view?usp=sharing",
      link1:
        "https://drive.google.com/file/d/1dk0GtCOkyIQF8Kha3gAPJep_vLSRbme_/view?usp=sharing",
      link2:
        "https://drive.google.com/file/d/1WLFKxWhf4qWv0S9tAsMuSc65_TOlagXL/view?usp=sharing",
      prizeWorth: "75K",
      description:
        "This Case Study Competition is the best way to understand the real-time issues and come up with the best feasible solutions to them. This case study competition will go in two rounds. The shortlisted ones in the 1st round will proceed to the 2nd round. The detailed guidelines of the event are provided in the Rulebook.",
    },
    {
      id: 8,
      image: Workshop,

      name: "Workshop",
      description:
        "Like every year this year also the National Social Summit 2022, IIT Roorkee, is going to organize various workshops to provide hands-on experiences on different social aspects and formulate socially active mindsets among people.",
    },
    {
      id: 9,
      image: Abhivyakti,
      name: "Abhivyakti",
      rulebook:
        "https://drive.google.com/file/d/1ZqbkeSaa1AYNMV6llw2CkN0kztEqLvd2/view?usp=sharing",
      prizeWorth: "15K",
      description:
        "It is a monologue competition providing a platform for the youths of our nation to express their inner voice to the world. The competition has 3 rounds and one individual can submit only one entry before 10th March 2022. The rules and regulations of each round along with submission procedures are provided in the Rulebook attached in the link.",
    },
    {
      id: 10,
      image: TurnCoat,
      rulebook:
        "https://drive.google.com/file/d/1kz_1qN1AQ5jqiTMheGz7pdYH0-C-hNry/view?usp=sharing",
      prizeWorth: "15K",
      name: "Turncoat",
      description:
        "This is a form of debate where one states both the pros and cons of a situation by switching sides after a specific duration. The competition is of 3 rounds. The participants are allowed to present their views in either English or Hindi. For detailed instructions please refer to the Rulebook.",
    },
    {
      id: 11,
      image: TreasureHunt,
      rulebook:
        "https://drive.google.com/file/d/15-DxTlDVxryACIemtoDfjwInf4rC5Qpw/view?usp=sharing",
      prizeWorth: "10K",
      name: "Treasure Hunt",
      description:
        "This is a fun activity in which an individual or a team solves clues for further hints and finally, the one who becomes the first to solves all the puzzles finds the treasure and wins the game. The game will be 2 rounds. For the detailed instruction please refer to the rulebook.",
    },
    {
      id: 12,
      image: PreSummit,
      name: "Pre Summit Events",
      description:
        "To merge you all in the vibe of our social fest the National Social Summit 2022, we are presenting you with some amazing pre-summit events like Pixels, Caricature, Microfiction, Meme making competition, and Inquisition. These fun engaging events will give you all a glimpse of our Summit. Come and show up your talents and be a part of this rich legacy of the National Social Summit.",
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
              image={element.image}
              rulebook={element.rulebook}
              prizeWorth={element.prizeWorth}
              link1={element.link1}
              link2={element.link2}
            />
          </div>
        );
      })}
    </div>
  );
}

export default EventContent;
