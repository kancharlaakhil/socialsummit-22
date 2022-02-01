import React from "react";
import "./DetailsComp.css";
function DetailsComp(props) {
  return (
    <div>
      <ul class="list-group border border-0">
        <li class="list-group-item border border-0">
          <div className="row">
            <div className="col-5">
              Name
            </div>
            <div className="col-2">:</div>
            <div className="col-5">{props.name}</div>
          </div>
        </li>
        <li class="list-group-item border border-0">
          <div className="row">
            <div className="col-5">
              CA Rank
            </div>
            <div className="col-2">:</div>
            <div className="col-5" style={{ color: "purple" }}>
              {props.ca_rank}
            </div>
          </div>
        </li>
        <li class="list-group-item border border-0">
          <div className="row">
            <div className="col-5">
              Email
            </div>
            <div className="col-2">:</div>
            <div className="col-5">{props.email}</div>
          </div>
        </li>
        <li class="list-group-item border border-0">
          <div className="row">
            <div className="col-5">
              Mobile
            </div>
            <div className="col-2">:</div>
            <div className="col-5">{props.mobile}</div>
          </div>
        </li>
        <li class="list-group-item border border-0">
          <div className="row">
            <div className="col-5">
              College
            </div>
            <div className="col-2">:</div>
            <div className="col-5">{props.college}</div>
          </div>
        </li>
        <li class="list-group-item border border-0">
          <div className="row">
            <div className="col-5">
              Address
            </div>
            <div className="col-2">:</div>
            <div className="col-5">{props.address}</div>
          </div>
        </li>
        <li class="list-group-item border border-0">
          <div className="row">
            <div className="col-5">
              Registrations by your CA-Id
            </div>
            <div className="col-2">:</div>
            <div className="col-5">{props.name}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DetailsComp;