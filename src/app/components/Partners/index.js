import React from "react";

import "./PartnersMain.css";
import Image from "./ImageComponent";

import img1 from "./assets/UNESCO.png";
import img2 from "./assets/Recode.png";
import img3 from "./assets/GeeksForGeeks.png";
import img4 from "./assets/IndiaIsUs.png";
import img5 from "./assets/Tides.png";
import img6 from "./assets/SankalpTaru.png";
import img7 from "./assets/Lakshyam.png";
import img8 from "./assets/Sponbar.png";
import img9 from "./assets/Certopus.png";
import img10 from "./assets/SponPartner.png";
import img11 from "./assets/D2C.png";
import img12 from "./assets/Timed.png";
import img13 from "./assets/hackerearth.png";
import img14 from "./assets/3izone.png";
import img15 from "./assets/mrida.png";
import img16 from "./assets/ADR.png";
import img17 from "./assets/CSR.png";
import img18 from "./assets/divami.png";
import img19 from "./assets/Straw.png";
import img20 from "./assets/Milan.png";
import img21 from "./assets/Pagalguy.png";
import img22 from "./assets/youth.png";
import img23 from "./assets/DUupdates.png";
import img24 from "./assets/KnowAfest.png";
import img25 from "./assets/ohcampus.png";
import img26 from "./assets/PanIIT.png";
import img27 from "./assets/IndiaEducation.png";
import img28 from "./assets/IndiaEducation.png";

{
}
const PartnersMain = () => {
  return (
    <div className="partnerPage">
      <div className="patronage">
        <h1 className="heading">UNDER THE PATRONAGE OF</h1>
        <Image image={img1} />
      </div>
      <div className="associate">
        <h1 className="heading">ASSOCIATE PARTNERS</h1>
        <Image image={img2} />
      </div>

      <div className="sponsors">
        <h1 className="heading">SPONSORS</h1>
        <div className="logo2">
          <Image image={img3} title="Learning Partner" />
          <Image image={img4} title="Consulting Partner" />
        </div>
        <div className="logo2">
          <Image image={img5} title="Learning Partner" />
          <Image image={img6} title="Green Initiative Partner" />
        </div>
        <div className="logo2">
          <Image image={img7} title="Education Partner" />
          <Image image={img8} title="Relation Partner" />
        </div>
        <div className="logo2">
          <Image image={img9} title="Certificate Partner" />
          <Image image={img10} title="Sponsorship Partner" />
        </div>
        <div className="logo2">
          <Image image={img11} title="Online Hosting Partner" />
          <Image image={img12} title="Action Plan Event Partner" />
        </div>

        <div className="logo3">
          <Image image={img13} title="Sociothon Event Partner" />
          <Image image={img14} title="Action Plan Event Partner" />
          <Image image={img15} title="Case Study Partner" />
        </div>
        <div className="logo3">
          <Image image={img16} title="Policy Case Partner" />
          <Image image={img17} title="Case Study Partner" />
          <Image image={img18} title="Wokshop Partner" />
        </div>
        <div className="logo3">
          <Image image={img19} title="Webinar Partner" />
          <Image image={img20} title="NGO Partner" />
        </div>
      </div>

      <div className="onlinePartner">
        <h1 className="heading">ONLINE MEDIA PARTNER</h1>
        <div className="logo3">
          <Image image={img21} title="Online Media Partner" />
          <Image image={img22} title="Youth Media Partner" />
          <Image image={img23} title="Online Media Partner" />
        </div>
        <div className="logo3">
          <Image image={img24} title="Online Media Partner" />
          <Image image={img25} title="Online Media Partner" />
          <Image image={img26} title="Online Media Partner" />
        </div>
        <div className="logo3 logo4">
          <Image image={img27} title="Online Media Partner" />
        </div>
      </div>
    </div>
  );
};

export default PartnersMain;
