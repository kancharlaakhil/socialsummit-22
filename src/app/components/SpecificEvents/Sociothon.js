import backtop from "./backtop.svg";
import SocioContent from "./SocioContent";
import "./Sociothon.css";
import socioimage from "./Sociothon.svg";

function Sociothon(props) {
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
            <h2>{props.eventTitle}</h2>
            <p>{props.eventDate} </p>
            <div className="th-event-sociothon-top1-content">
              {props.description}
            </div>
            <div className="th-event-sociothon-top1-links">
              <a href={props.registerLink}>Register &gt; </a>
              <a href={props.rulebookLink}>Rulebook &gt;</a>
            </div>
          </div>
          <div className="th-event-sociothon-top2">
            <div className="th-event-sociothon-top2-imagecontainer">
              <img
                className="th-event-sociothon-top2-image"
                src={props.eventIllustration}
                alt=""
              />
            </div>
            <h2>
              Prize Worth :{" "}
              <span style={{ color: "#663AA3", fontSize: "2rem" }}>
                {props.prizeWorth}
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="th-event-sociothon-tops">
        <div>
          <div className="th-event-sociothon-top1">
            <h2>{props.eventTitle}</h2>
            <p>{props.eventDate} </p>
            <div className="th-event-sociothon-top2-imagecontainer">
              <img
                className="th-event-sociothon-top2-image"
                src={props.eventIllustration}
                alt=""
              />
            </div>
            <div className="th-event-sociothon-top1-content">
              {props.description}
            </div>

            <h2 className="th-event-sociothon-prize">
              Prize Worth :{" "}
              <span style={{ color: "#663AA3", fontSize: "1.8rem" }}>
                {props.prizeWorth}
              </span>
            </h2>
            <div className="th-event-sociothon-top1-links">
              <a href={props.registerLink}>Register &gt; </a>
              <a href={props.rulebookLink}>Rulebook &gt;</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SocioContent />
      </div>
      {/* <div><Event /></div> */}
    </div>
  );
}

export default Sociothon;
