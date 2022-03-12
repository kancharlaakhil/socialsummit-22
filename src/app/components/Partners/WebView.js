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
const WebView = () => {
  return (
    <div className="partnerPage">
      <div className="patronage">
        <h1 className="heading">UNDER THE PATRONAGE OF</h1>
        <Image
          image={img1}
          width="30rem"
          height="15rem"
          link="https://en.unesco.org/"
        />
      </div>
      <div className="associate">
        <h1 className="heading">ASSOCIATE PARTNERS</h1>
        <Image
          image={img2}
          width="30rem"
          height="15rem"
          link="https://shop.recodestudios.com/"
        />
      </div>

      <div className="sponsors">
        <h1 className="heading">SPONSORS</h1>
        <div className="logo2">
          <Image
            image={img3}
            title="Learning Partner"
            link="https://www.geeksforgeeks.org/"
          />
          <Image
            image={img4}
            title="Consulting Partner"
            link="https://www.indiaisus.com/"
          />
        </div>
        <div className="logo2">
          <Image
            image={img5}
            title="Learning Partner"
            link="http://tides.iitr.ac.in/"
          />
          <Image
            image={img6}
            title="Green Initiative Partner"
            link="https://sankalptaru.org/"
          />
        </div>
        <div className="logo2">
          <Image
            image={img7}
            title="Education Partner"
            link="https://www.lakshyam.co.in/"
          />
          <Image
            image={img8}
            title="Relation Partner"
            link="https://sponbar.tech/"
          />
        </div>
        <div className="logo2">
          <Image
            image={img9}
            title="Certificate Partner"
            link="https://certopus.com/"
          />
          <Image
            image={img10}
            title="Sponsorship Partner"
            linnk="http://sponsorbull.com/"
          />
        </div>
        <div className="logo2">
          <Image
            image={img11}
            title="Online Hosting Partner"
            link="https://dare2compete.com/"
          />
          <Image
            image={img12}
            title="Action Plan Event Partner"
            link="https://www.timed.org.in/"
          />
        </div>

        <div className="logo3">
          <Image
            image={img13}
            title="Sociothon Event Partner"
            link="https://www.hackerearth.com/"
          />
          <Image
            image={img14}
            title="Action Plan Event Partner"
            link="https://3izone.com/"
          />
          <Image
            image={img15}
            title="Case Study Partner"
            link="https://www.mridagroup.com/"
          />
        </div>
        <div className="logo3">
          <Image
            image={img16}
            title="Policy Case Partner"
            link="https://adrindia.org/"
          />
          <Image
            image={img17}
            title="Case Study Partner"
            link="https://www.csrindia.org/"
          />
          <Image
            image={img18}
            title="Wokshop Partner"
            link="https://www.divami.com/"
          />
        </div>
        <div className="logo3">
          <Image
            image={img19}
            title="Webinar Partner"
            link="https://www.strawindia.org/"
          />
          <Image
            image={img20}
            title="NGO Partner"
            link="https://milaanfoundation.org/"
          />
        </div>
      </div>

      <div className="onlinePartner">
        <h1 className="heading">ONLINE MEDIA PARTNER</h1>
        <div className="logo3">
          <Image
            image={img21}
            title="Online Media Partner"
            link="https://www.pagalguy.com/"
          />
          <Image
            image={img22}
            title="Youth Media Partner"
            link="https://youthincmag.com/"
          />
          <Image
            image={img23}
            title="Online Media Partner"
            link="https://www.duupdates.in/"
          />
        </div>
        <div className="logo3">
          <Image
            image={img24}
            title="Online Media Partner"
            link="https://www.knowafest.com/college-fests/events"
          />
          <Image
            image={img25}
            title="Online Media Partner"
            link="https://ohcampus.com/"
          />
          <Image
            image={img26}
            title="Online Media Partner"
            link="https://www.paniit.org/"
          />
        </div>
        <div className="logo3 logo4">
          <Image
            image={img27}
            title="Online Media Partner"
            link="https://www.indiaeducation.net/"
          />
        </div>
      </div>
    </div>
  );
};

export default WebView;
