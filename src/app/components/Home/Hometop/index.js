import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeTopImage from '../images/hometop-image.png'

class Hometop extends Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <div className=" th-hometop-parent ">
          <div className="th-hometop-parent-text">
            <h1 className="th-home-top-header mb-0">EMBRACING</h1>
            <h1 className="th-home-top-header mb-2">INCLUSION</h1>

            <p className=" th-hometop-event-date ">19th - 20th MARCH, 2022</p>

            <p className=" th-hometop-content ">
              NSS IIT Roorkee is taking a step forward to dedicate the next
              edition of its annual flagship event, the National Social Summit.
            </p>
            <div className="d-flex mt-3">
              <Link to="" className="th-register-btn w-50 mr-3">
                <span className="th-register-btn-text">Register</span>
              </Link>
            </div>
          </div>

          <div className=" th-home-top-image">
            <img
              src={HomeTopImage}
              alt=""
              className="w-100 "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Hometop;