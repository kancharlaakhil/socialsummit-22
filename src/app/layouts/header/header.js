import React, { Component } from "react";
import Logo from "../../assets/images/nss-logo.png";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import SideDrawer from "../sideDrawer";
import BackDrop from "../sideDrawer/Backdrop";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'

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

   const {auth} = this.props;

    return (
      <div className="pe-3 ps-3 gradient">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link to="/">
              <img src={Logo} alt="logo" className="th-header-logo" />
            </Link>
            <div style={{ position: "absolute", marginLeft: "25vw" }}
            className="navbar1  d-flex align-items-center pl-5"  >
              <NavLink  
              
              to="/home" activeClassName="active" className=" ml-5 ">
                <p className="mb-0 navmar pl-5 th-nss">Home</p>
              </NavLink>
              <NavLink to="/about" activeClassName="active">
                <p className="mb-0 navmar th-nss">About</p>
              </NavLink>
              <NavLink to="/speakers" activeClassName="active">
                <p className="mb-0 navmar th-nss">Speakers</p>
              </NavLink>
              <NavLink to="/partners">
                <p className="mb-0 navmar th-nss" activeClassName="active">
                  Partners
                </p>
              </NavLink>
              <NavLink to="/events">
                <p className="mb-0 navmar th-nss" activeClassName="active">
                  Events
                </p>
              </NavLink>
              <NavLink to="/contact">
                <p className="mb-0 navmar th-nss" activeClassName="active">
                  Contact Us
                </p>
              </NavLink>
              {
                auth.isLoggedIn ? 
                <NavLink
                style={{ position: "absolute", marginLeft: "61vw" }}
                to="/dashboard"
              >
                <p className="mb-0 th-nss" activeClassName="active">
                  DASHBOARD
                </p>
              </NavLink>:
              <NavLink
              style={{ position: "absolute", marginLeft: "61vw" }}
              to="/login"
              
            >
              <button type="button" className="b1234">Login</button>
              {/* <p className="mb-0 th-nss" activeClassName="active">
                
              </p> */}
            </NavLink>
              }
              
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

const mapStateToProps = (state) => {
  return {
    auth : state.authState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);