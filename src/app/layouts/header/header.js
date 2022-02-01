import React, { Component } from "react";
import Logo from "../../assets/images/nss-logo.png";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import SideDrawer from "../sideDrawer";
import BackDrop from "../sideDrawer/Backdrop";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  openSideDrawer = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  closeSideDrawer = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.openSideDrawer} />;
    }

    return (
      <div className="pe-3 ps-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link to="/">
              <img src={Logo} alt="logo" className="th-header-logo" />
            </Link>
            <div className=" navbar1 d-flex align-items-center">
              <NavLink to="/home" activeClassName="active">
                <p className="mb-0 ms-5 th-nss">HOME</p>
              </NavLink>
              <NavLink to="/about" activeClassName="active">
                <p className="mb-0 ms-5 th-nss">ABOUT</p>
              </NavLink>
              <NavLink to="/speakers" activeClassName="active">
                <p className="mb-0 ms-5 th-nss">SPEAKERS</p>
              </NavLink>
              <NavLink to="/partners">
                <p className="mb-0 ms-5 th-nss" activeClassName="active">
                  PARTNERS
                </p>
              </NavLink>
              <NavLink to="/events">
                <p className="mb-0 ms-5 th-nss" activeClassName="active">
                  EVENTS
                </p>
              </NavLink>
              <NavLink to="/contact">
                <p className="mb-0 ms-5 th-nss" activeClassName="active">
                  CONTACT
                </p>
              </NavLink>
              <NavLink
                style={{ position: "absolute", marginLeft: "70vw" }}
                to="/login"
              >
                <p className="mb-0 th-nss" activeClassName="active">
                  LOGIN
                </p>
              </NavLink>
            </div>
          </div>
          <Menu
            size={this.props.width > 992 ? 0 : 24}
            onClick={this.drawerToggleClickHandler}
            className="th-theme-color"
            style={{ cursor: "pointer" }}
          />
        </div>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          clicked={this.drawerToggleClickHandler}
        />
        {backdrop}
      </div>
    );
  }
}

export default Header;