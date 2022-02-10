import React from "react";

function Entry(props) {


let customStyle= {
  backgroundColor: "",
  marginTop: "0px",
  color:"white"
}
  if(props.number%2){
    customStyle.backgroundColor = "#F8F8F8";
    customStyle.color= "#663AA3"

  }
  else{
    customStyle.backgroundColor = "#663AA3";

    customStyle.marginTop = "120px";
  }
  return (
    <div className="th-home-testimonial-card" >
      <div className="th-home-testimonial-uc" style={customStyle}>
       {props.description}
      </div>
      <div className="th-home-testimonial-lc">
        <img src={props.image} className="th-home-testimonial-img" />
        <div className="th-home-testimonial-lc-2">
          <h4>{props.title}</h4>
          <h5>{props.post}</h5>
        </div>
      </div>
    </div>
  );
}

export default Entry;