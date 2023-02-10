import React, { Component } from "react";

import CountUp from "react-countup";

class Counter extends Component {
  render() {
    return (
      <div className="container th-home-footfall-container">
        <div className="row justify-content-center p-0 m-0 ft-box" >
          <div className="col-sm-3 col-6 text-center ft-text">
            <CountUp
              start={0}
              end={12000}
              className="mb-1 th-home-count"
              suffix="+"
              duration={5}
            />
            <p className="th-home-count-text mb-0">Footfall</p>
          </div>
          <div className="col-sm-3 col-6 text-center ft-text">
            <CountUp
              start={0}
              end={100}
              className="mb-1 th-home-count"
              suffix="+"
              duration={5}
            />
            <p className="th-home-count-text mb-0">Partners</p>
          </div>
          <div className="col-sm-3 col-6 text-center ft-text">
            <CountUp
              start={0}
              end={100}
              className="mb-1 th-home-count"
              suffix="+"
              duration={5}
            />
            <p className="th-home-count-text mb-0">Prizes</p>
          </div>
          <div className="col-sm-3 col-6 text-center ft-text">
            <CountUp
              start={0}
              end={20}
              className="mb-1 th-home-count"
              suffix="+"
              duration={5}
            />
            <p className="th-home-count-text mb-0">Events</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;