import backtop from "./backtop.svg";
import SocioContent from "./SocioContent";
import "./Sociothon.css";
import socioimage from "./Sociothon.svg"

function Sociothon() {
  return (
    <div className="Sociothon">
      <div
        style={{
          backgroundImage: `url(${backtop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "375px",
        }}
      ></div>
      <div className="th-event-sociothon-top">
      <div className="th-Sociothon-contain">
        <div className="th-event-sociothon-top1">
          <h2>Sociothon</h2>
          <p>19th Mar’22 ; 10 am-1pm </p>
          <div className="th-event-sociothon-top1-content">
            We pride ourselves on walking the walk and talking the talk. Bearing
            in mind the embryonic nature of talent and business competence the
            youth today possesses. We pride ourselves on walking the walk and
            talking the talk.
          </div>
          <div className="th-event-sociothon-top1-links">
          <a href="#">Register &gt; </a><a href="#">Rulebook &gt;</a>
          </div>
        </div>
        <div className="th-event-sociothon-top2">
          <div className="th-event-sociothon-top2-imagecontainer">
             <img className="th-event-sociothon-top2-image" src={socioimage}/>
          </div>
          <h2>Prize Worth : <span style={{color:"#663AA3",fontSize:"2rem"}}>15K</span></h2>
        </div>
        </div>
      </div>

      <div className="th-event-sociothon-tops">
      <div >
        <div className="th-event-sociothon-top1">
          <h2>Sociothon</h2>
          <p>19th Mar’22 ; 10 am-1pm </p>
          <div className="th-event-sociothon-top2-imagecontainer">
             <img className="th-event-sociothon-top2-image" src={socioimage}/>
          </div>
          <div className="th-event-sociothon-top1-content">
            We pride ourselves on walking the walk and talking the talk. Bearing
            in mind the embryonic nature of talent and business competence the
            youth today possesses. We pride ourselves on walking the walk and
            talking the talk.
          </div>
          
          <h2 className="th-event-sociothon-prize">Prize Worth : <span style={{color:"#663AA3",fontSize:"1.8rem"}}>15K</span></h2>
          <div className="th-event-sociothon-top1-links">
          <a href="#">Register &gt; </a><a href="#">Rulebook &gt;</a>
          </div>
        </div>
        
        </div>
      </div>
      <div><SocioContent /></div>
      {/* <div><Event /></div> */}
    </div>
  );
}

export default Sociothon;
