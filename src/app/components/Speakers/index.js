// import React from "react";

// import Speaker from './components/Speaker';
// // import './App.css';
// //import React from "react";
// import "./styles/Speakers.css";
// // import Speaker from './main/Main';
// // import './main/Mains.css';
// import img1mob from './assets/Group 701.png';
// import img2mob from './assets/Group 702.png';
// import img3mob from './assets/Group 708.png';
// import img4mob from './assets/Group 709.png';
// import img5mob from './assets/Group 710.png';
// import img6mob from './assets/Group 711.png';
// import jhajaria from './assets/jhajaria only.svg';
// import ofrin from './assets/ofrin new.svg';
// import sanyal from './assets/sanyal only.svg';
// import bedi from './assets/bedi new.svg';
// import dhami from './assets/dhami only.svg';
// import Sonam from './assets/sonam new.svg';


// function Speakers() {
//   const data = [
//     {
//       id: 1,
//       name: "DEVENDRA JHAJHARIA",
//       post: "Silver medalist at Tokyo Paralympics",
//       descp:
//         "Devendra Jhajharia was born in 1981 and hails from the churu district of rajasthan. He is an Indian Paralympic javelin thrower competing in F46 events. He is the first Indian Paralympics player to win two gold medals at the Paralympics. He won his first gold in the javelin throw at the 2004 Summer Paralympics in Athens, becoming the second gold medalist at the Paralympics for his country. At the 2016 Summer Paralympics in Rio de Janeiro, he won a second gold medal in the same event, bettering his previous record.He became India's most decorated Paralympic player by winning his third medal, a silver at the 2020 Summer Paralympics at Tokyo.He delivered an astonishing lecture on 'A journey beyond differences', to inspire youths out of his journey, during national social summit 2022 ",
        
       
//       image: jhajaria,
//       imagemob: img1mob,
//       color: '#FD652D',
//       left: '50px',
//     },
//     {
//       id: 2,
//       name: "Dr Roderico H. Ofrin",
//       post: "WHO Representative to India",
//       descp:
//         "Born in 1968 in the Philippines, Dr Roderico H. Ofrin is currently WHO India representative. Dr Ofrin holds a Doctor of Medicine from the University of the Philippines; and a Master’s in Public Health from Hebrew University Hadassah, Israel.Dr Ofrin comes with a rich experience of over two decades in public health. His extensive experience and expertise covers critical issues impacting health of people in the 11 Member countries, including India.Dr Ofrin has served in multiple roles starting as a Public Health Officer in a war-ravaged island nation of Timor-Leste, assisting in setting up of its health systems.Dr Ofrin was a keynote speaker under the 'Impact Series' , a series of guest lectures, and delivered a session on 'The gargantuan inoculation drive: a vaccine for everyone'.",
//       image: ofrin,
//       imagemob: img2mob,
//       color:'#FF980D',
//       left: '50px',
//     },


//     {
//       id: 3,
//       name: "Atrayee S Sanyal",
//       post: " Vice President HRM at Tata Steel",
//       descp:
//         "'A journey where all of us are sensitized about the problem and all are ambassadors of it, becomes easier to combat', said Miss atreeya s sanyal, chief guest of social summit 2k22. She delivered a session on 'Embracing target-driven D & I at workplace', under the 'impact series', the guest lecture series of social summit. Atreeya sarkar sanyal is currently the vice president, HRM of tata steel Ltd. She did her graduation from University of Calcutta and masters from IIM Calcutta. She served tata steel for the last 5 years, starting from marketing and sales and then in human resource management.",
//       image: sanyal,
//       imagemob: img3mob,
//       color:'#22495A',
//       left: '50px',
//     },
//     {
//       id: 4,
//       name: "Kiran Bedi",
//       post: "Lt. Governor of Puducherry",
//       descp:
//         "Kiran Bedi is an Indian social activist, former-tennis player who became the first woman in India to join the officer ranks of the Indian Police Service.Her talk revolved mostly around the concept of ‘Leadership with Conscience’. Conscience, as Dr. Bedi explained it, is a person’s ability to discern right from wrong. In a holistic way, she tried to propose a solution to the quintessential problem of lack of moral discipline among the country’s population.She believed that this lack of morality could be attributed to the absence of ethical education. Dr. Kiran Bedi’s presence quite easily left an imprint on the listeners’ mind.",
//       image: bedi,
//       imagemob:img4mob,
//       color: '#FD652D',
//       left: '50px',
//     },

//     {
//       id: 5,
//       name: "Shri. Pushkar Singh Dhami",
//       post: "Chief Minister of Uttarakhand",
//       descp:
//         "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented.",
//       image: dhami,
//       imagemob:img5mob,
//       color:'#FF980D',
//       left: '50px',
//     },
//     {
//       id: 6,
//       name: "Sonam Wangchuk",
//       post: "Founding Director SECMOL",
//       descp:
//         "An Indian Engineer, Raman Magsaysay Awardee, innovative and education reformist. The pioneer of the Ice Stupa project; fully solar powered SECMOL campus and Operations New Hope.He gave a tremendous speech in an event organised by the NSS team of IIT Roorkee. His speech focuses on the minute things which each one us should take care about nature and most precious climate, this focuses on the sustainable innovations and eco-friendship.",
//       image: Sonam,
//       imagemob:img6mob,
//       color:'#22495A',
//       left: '50px',
//     },
//   ];

//   return (
//     <div className="speakersPage">
//       <div className="headingSpeaker">
//         <h1>Speakers</h1>
//         {/* <p>10+ hours of thrilling session</p> */}
//       </div>

//       {data.map((element) => {
//         return (
//           <Speaker
//             key={element.id}
//             id={element.id}
//             name={element.name}
//             post={element.post}
//             descp={element.descp}
//             image={element.image}
//             color={element.color}
//             left={element.left}
//             imagemob={element.imagemob}
//           />
//         );
//       })}
//     </div>
//   );
// }




// export default Speakers;
import React from "react";
import Speaker from './components/Speaker';
import "./styles/Speakers.css";
import img1mob from './assets/Group 701.png';

import background from './assets/background.png';
import mark from './assets/mark.png';

import Header from "../../layouts/header/index"

import mark1 from './assets/mark1.png';
import pushkar from './assets/pushkar.png';
import kiran from './assets/kiranbedi.png';
import sonamw from './assets/sonamw.png';
import roderico from './assets/roderico.png';
import aruna from './assets/arunaroy.png';
import major from './assets/majordpsingh.png'
import ashneer from './assets/ashneer.png';
import priyanka from './assets/priyankaraina.png';


function Speakers() {
  const data = [
    {
      id: 1,
      name: "Shri Pushkar Singh Dhami",
      post: "Chief Minister of Uttarakhand",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented. ",
      image: pushkar,
      imagedot:mark,
      imagedot1:mark1,
      imagemob: img1mob,
      color: '#FD652D',
      left: '50px',
    },
    {
      id: 2,
      name: "Kiran Bedi",
      post: "IPS(Retd),Former LG",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented. ",
      image: kiran,
      imagedot:mark,
      imagedot1:mark1,
      imagemob: img1mob,
      color: '#FD652D',
      left: '50px',
    },
    {
      id: 3,
      name: "Sonam Wangchuk",
      post: "Innovator, Reformer",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented. ",
      image: sonamw,
      imagedot:mark,
      imagedot1:mark1,
      imagemob: img1mob,
      color: '#FD652D',
      left: '50px',
    },
    {
      id: 4,
      name: "Dr. Roderico Ofrin",
      post: "WHO Representative",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented. ",
      image: roderico,
      imagedot:mark,
      imagedot1:mark1,
      imagemob: img1mob,
      color: '#FD652D',
      left: '50px',
    },
    {
      id: 5,
      name: "Aruna Roy",
      post: "Social Activist",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented. ",
      image: aruna,
      imagedot:mark,
      imagedot1:mark1,
      imagemob: img1mob,
      color: '#FD652D',
      left: '50px',
    },
    {
      id: 6,
      name: "Major DP Singh",
      post: "India's First Blade Runner",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented. ",
      image: major,

     
      imagedot:mark,
      imagedot1:mark1,
      imagemob: img1mob,
      color: '#FD652D',
      left: '50px',
    },
    {
      id: 7,
      name: "Ashneer Grover",
      post: "Co-Founder BharatPe",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented. ",
      image: ashneer,
      imagedot:mark,
      imagedot1:mark1,
      imagemob: img1mob,
      color: '#FD652D',
      left: '50px',
    },
    {
      id: 8,
      name: "Priyanka Raina",
      post: "Co-Founder GRF",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented. ",
      image: priyanka,
      imagedot:mark,
      imagedot1:mark1,
      imagemob: img1mob,
      color: '#FD652D',
      left: '50px',
    }
  ];

  
  return (
    <>
    <Header/>
    <div className="Speaker-Wrapper">
        <img src={background} alt="" className="backimgspeaker" />
    <div className="speakersPage">
      {data.map((element) => {
        return (
          <Speaker
            key={element.id}
            id={element.id}
            name={element.name}
            post={element.post}
            descp={element.descp}
            image={element.image}
            imagedot={element.imagedot}
            imagedot1={element.imagedot1}
            color={element.color}
            left={element.left}
            imagemob={element.imagemob}
          />
        );
      })}
    </div>
    </div>
    </>
  );
}

export default Speakers;
