import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import { LoginAuthAction } from '../../redux/actions/AuthAction'

function LoginForm(props) {

  const {login} = props;
 
  const [loginState, setLoginState] = useState({});
  const history = useHistory();

  return (
    <div className="th-login">
      <div className="row login" style={{ paddingTop: "8rem" }}>
        <div class="th-register-col-2 col-md-5 offset-md-1 col-sm-12 th-register-right-mobile mb-4">
          <div class="th-right-text-1">Login to Dashboard</div>
          <div class="th-right-text-2">
            Do not have an account?{" "}
            <Link to="/signup" className="th-right-link">
              Register Now
            </Link>
          </div>
        </div>
        <div class="th-register-col-1 col-md-4 offset-md-1 col-sm-8 offset-sm-2">
          <form class="p-5 registration-form"
            onSubmit = {(event) => {
              event.preventDefault();
              login(loginState, history)
            }}
          >
            <div class="row">
              <div class="col-md-12 mb-4">
                <div className="pt-5 th-form-group">
                  <input
                    type="email"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange={(event) => {
                      const email = event.target.value;
                      setLoginState({...loginState,  ...{email}})
                    }}
                  />
                  <label>
                    Email-ID/Summit-ID
                    <span className="th-required-span">*</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div className="th-form-group">
                <input
                  type="text"
                  className="th-form-control form-control flex"
                  id=""
                  name=""
                  onChange={(event) => {
                    const password = event.target.value;
                    setLoginState({...loginState,  ...{password}})
                  }}
                />
                <label
                  style={{ flexWrap: "wrap", justifyContent: "space-between" }}
                >
                  {" "}
                  <span>Password</span>{" "}
                  <Link to="/forgot-password" className="th-right-link">
                    Forgot Password
                  </Link>
                </label>
              </div>
            </div>
            <div className="row pb-4">
              <div
                className="col-md-6 th-registration-btn-1 pb-5"
                th-form-group
              >
                <button class="th-registration-btn-2 btn mt-4" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  
  return {
    user : state.authState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login : (loginState, history) => {
      dispatch(LoginAuthAction(loginState, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);