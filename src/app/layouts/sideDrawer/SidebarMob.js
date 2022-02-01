import React, { Component } from "react";
import { Link } from "react-router-dom";
import { X } from "react-feather";

class SideDrawerMob extends Component {
  render() {
    let drawerClasses = "th-sidedrawer-mob";
    if (this.props.show) {
      drawerClasses = "th-sidedrawer-mob open";
    }

    return (
      <div>
        <div className={drawerClasses}>
          <div className="pt-2 pb-4 ps-3 pe-3">
            <div className="d-flex justify-content-end mb-3">
              <X
                size={28}
                onClick={this.props.clicked}
                className="th-theme-color mt-1 ml-2 float-right"
                style={{ cursor: "pointer", color: "#FFFFFF" }}
              />
            </div>
            <div>
              <Link to="/home" onClick={this.props.clicked} className="th-link">
                <p className="th-sidebar-list-item mb-3">Home</p>
              </Link>
              <Link
                to="/about"
                onClick={this.props.clicked}
                className="th-link"
              >
                <p className="th-sidebar-list-item mb-3">About</p>
              </Link>
              <Link
                to="/partners"
                onClick={this.props.clicked}
                className="th-link"
              >
                <p className="th-sidebar-list-item mb-3">Partners</p>
              </Link>
              <Link
                to="/events"
                onClick={this.props.clicked}
                className="th-link"
              >
                <p className="th-sidebar-list-item mb-3">Events</p>
              </Link>
              <Link
                to="/teams"
                onClick={this.props.clicked}
                className="th-link"
              >
                <p className="th-sidebar-list-item mb-3">Speakers</p>
              </Link>
              <Link
                to="/contact"
                onClick={this.props.clicked}
                className="th-link"
              >
                <p className="th-sidebar-list-item mb-3">Contact</p>
              </Link>
              <hr style={{ width: "70%", color: "#FFFFFF", opacity: "1" }} />
              <div className="th-sidebar-list-item1">
                <Link
                  to="/login"
                  onClick={this.props.clicked}
                  className="th-link"
                >
                  <p className="th-sidebar-list-item mb-3">Login</p>
                </Link>
                <Link
                  to="/register"
                  onClick={this.props.clicked}
                  className="th-link ms-5"
                >
                  <p className="th-sidebar-list-item mb-3">Register</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawerMob;