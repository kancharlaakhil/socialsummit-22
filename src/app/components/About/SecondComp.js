import React from "react";
import img1 from "../../assets/images/p1.png";
import img2 from "../../assets/images/p2.png";
import img3 from "../../assets/images/p3.png";
import "./SecondComp.css";
function SecondComp() {
  return (
    <div className="container">
      <div className="row " style={{
          overflow :'hidden'
      }}>
        <div className="col-sm-12 col-md-3">
          <div id="card-1"class="card border-light mb-3 text-center" style={{ width: "22rem" ,
                 backgroundColor : "#fafafa"
        }}>
            <img src={img1} class="card-img-top" alt="..." style={{}} />
            <div class="card-body">
              <h5 class="card-title" style={{ fontFamily: "Inter", fontWeight:"700"}}>
                VISION
              </h5>
              <p class="card-text" style={{ fontFamily: "Roboto" }}>
                NSS IIT Roorkee is taking a step forward to dedicate the next
                edition of its annual flagship event, the National Social
                Summit, to the healthcare workers, including doctors, nurses,
                and all social service warriors, who are battling against the
                threat of COVID-19 to keep us safe.
              </p>
            </div>
          </div>
        </div>
        <div  className="col-sm-12 col-md-1"></div>
        <div className="col-sm-12 col-md-3 py-5">
          <div id="card-2" class="card border-light mb-3 text-center" style={{ width: "22rem",    backgroundColor : "#fafafa" }}>
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{ fontFamily: "Inter", fontWeight:"700" }}>
                DYNAMICS
              </h5>
              <p class="card-text" style={{ fontFamily: "Roboto" }}>
                NSS IIT Roorkee is taking a step forward to dedicate the next
                edition of its annual flagship event, the National Social
                Summit, to the healthcare workers, including doctors, nurses,
                and all social service warriors, who are battling against the
                threat of COVID-19 to keep us safe.
              </p>
            </div>
          </div>
        </div>
        <div  className="col-sm-12 col-md-1"></div>
        <div className="col-sm-12 col-md-3">
          <div id="card-3" class="card border-light mb-3 text-center" style={{ width: "22rem",    backgroundColor : "#fafafa" }}>
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{ fontFamily: "Inter", fontWeight:"700" }}>
                MISSION
              </h5>
              <p class="card-text" style={{ fontFamily: "Roboto" }}>
                NSS IIT Roorkee is taking a step forward to dedicate the next
                edition of its annual flagship event, the National Social
                Summit, to the healthcare workers, including doctors, nurses,
                and all social service warriors, who are battling against the
                threat of COVID-19 to keep us safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondComp;