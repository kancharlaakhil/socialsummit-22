import React from "react";

import Speaker from "./components/Speaker";
// import SpeakerRight from "./components/SpeakerRight";
import "./styles/Speakers.css";

import Devendra from "./assets/Devendra.png";
import Abhayanand from "./assets/Abhyanand.png";
import Atrayee from "./assets/Atrayee.png";
import DPSingh from "./assets/DPSingh.png";
import Mangesh from "./assets/Wange.png";
import Aruna from "./assets/Aruna.png";

function Speakers() {
  const data = [
    {
      id: 1,
      name: "Major DP Singh",
      post: "",
      descp:
        "Major DP Singh happens to be a pronounced Kargil war survivor, who is also India’s first amputee marathon runner, first blade runner of our nation and also the first disabled solo skydiver of Asia. He is a proud recipient of the National Award for the empowerment of persons with disabilities (2018), by the government of India as a role model in the category of multiple disabilities. He also received the Limca People of the year award in 2016, became the ambassador of the year of disabled celebration of Indian Army in 2018 and is the Indian brand ambassador for WIngs of Life world run, an across-the-world social initiative of Red Bull for cancer awareness. His life struggle and motivation is a great role model for this generation.",
      image: DPSingh,
    },
    {
      id: 2,
      name: "Aruna Roy",
      post: "",
      descp:
        "Aruna Roy is one of India’s most prominent activists. Formerly, she was a civil servant till 1975, before she resigned to work for the rural poor section in Rajasthan area. She collectively formed the MKSS Mazdoor Kisan Shakti Sangathan in 1990, an organization for the empowerment of workers and peasants. She played a pivotal role in drafting and advocating for the Right to Information Law in 2005. Being an active member of India’s National Advisory Council, she played a crucial role in the passage of the MGNREGA act in 2005. Currently the president of the National Federation of Indian Women; she was awarded the Ramon Magsaysay Award in 2000, Lal Bahadur Shastri National Award for Excellence in Public Administration, Academia and Management in 2010 and listed one of the 100 most influential people in the world by the TIME magazine in 2011.",
      image: Aruna,
    },

    {
      id: 3,
      name: "Devendra Jhajharia",
      post: " Guest of Honor",
      descp:
        "Devendra Jhajharia is an Indian Paralympic javelin thrower. He is the first Indian Paralympics player to win two gold medals at the Paralympics. He won his first gold in the javelin throw at the 2004 Summer Paralympics in Athens, becoming the second gold medalist at the Paralympics for his country. At the 2016 Summer Paralympics in Rio de Janeiro, he won a second gold medal in the same event, bettering his previous record. Devendra is currently being supported by the Olympic Gold Quest. He became India’s most decorated Paralympic player by winning his third medal, a silver at the 2020 Summer Paralympics at Tokyo.",
      image: Devendra,
    },
    {
      id: 4,
      name: "Abhayanand",
      post: "",
      descp:
        "Abhayanand is an IPS officer and educationalist, who along with Anand Kumar, conceptualized Super 30 to teach poor students to crack IIT JEE. He was selected as the IPS officer for the Bihar cadre after clearing UPSC in 1977. He was the ADG in 2006 and as such he concentrated on the speedy trial of Arms Act cases in Bihar. Later, during his tenure as the ADG of Bihar Military Police, Patna; he motivated the constables to donate from their salaries to convert a dilapidated government hospital into a modern nursing home with state-of-the-art facilities for treatment of the police force and their family members. He was appointed the D.G.P. Bihar in August 2011, following the footsteps of his late father, who was the 28th D.G.P. Bihar in 1985-86.",
      image: Abhayanand,
    },

    {
      id: 5,
      name: "Mangesh Wange",
      post: "CEO- Swades Foundation",
      descp:
        "Mangesh Wange is the CEO of Swades Foundation and has more than 27 years of General Management experience with P&L responsibility and in leading successful start-ups across multiple sectors and various organizations viz. Farm Inputs (Farm Machinery, Agri-Inputs, Animal Feeds & Micro Information), Retail and Micro Finance. Having rich experience in strategy formulation & implementation he has for both organic & inorganic growth of businesses. He has started his career in Sales & Distribution with Mahindra Tractors in 1987. Before joining Swades, Mangesh was the Head of Animal Feeds Business at Godrej Agrovet Limited.",
      image: Mangesh,
    },
    {
      id: 6,
      name: "Atrayee S Sanyal",
      post: "Vice President HRM- Tata Steel",
      descp:
        "Atrayee S Sanyal is vice president HRM of India’s multinational steel manufacturing company and longstanding CEDEP member of Tata Steel. She spent almost 20 years in sales and marketing at Tata Steel where she spearheaded the company’s branding journey. Then, she moved into human resources gaining front line experience in talent management, leadership and L&D. She is a passionate advocate of diversity and inclusion and has been at the forefront of D&I benchmarking practices within Tata Steel. She won the British government’s chevening scholarship and sits on the boards of four companies within the Tata Steel Group. Atrayee brings to the CEDEP board a wealth of international operational and HR management expertise in addition to in-depth knowledge of rapidly expanding manufacturing markets in South Asia.",
      image: Atrayee,
    },
  ];

  return (
    <div className="speakersPage">
      <div className="headingSpeaker">
        <h1>Speakers</h1>
        <p>10+ hours of thrilling session</p>
      </div>

      {data.map((element) => {
        return (
          <Speaker
            key={element.id}
            id={element.id}
            name={element.name}
            post={element.post}
            descp={element.descp}
            image={element.image}
          />
        );
      })}
    </div>
  );
}

export default Speakers;
