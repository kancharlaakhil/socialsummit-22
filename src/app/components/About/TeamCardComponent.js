import React from "react";

function TeamCardComponent(props) {
  return (
    <div>
      <div
        class="card border-light mb-3d text-center"
        style={{ fontFamily: "Inter",width:"15rem", backgroundColor : "#fafafa"}}
      >
        <img src={props.img} class="card-img-top rounded-circle" alt="..." />
        <div class="card-body">
          <h5 class="card-title" style={{ fontFamily: "Roboto",fontWeight:"700" }}>
            {props.memberName}
          </h5>
          <p class="card-text" style={{ fontFamily: "Roboto" ,fontWeight:"400"}}>
            {props.memberPost}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCardComponent;