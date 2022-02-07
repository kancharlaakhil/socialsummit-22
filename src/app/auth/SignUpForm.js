import React , {useState} from "react";
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { AuthActionType } from '../../redux/actions/type'
import { SignupAuthAction } from '../../redux/actions/AuthAction'

function SignUpForm({user, signup}) {

  
  const [userState, setUserState] = useState({})
  const history = useHistory()

  return (
    <div className="th-registration">
      <div className="row" style={{ paddingTop: "8rem" }}>
        <div class="th-register-col-2-mobile col-md-7 col-sm-12 th-register-right-mobile mb-4">
          <div class="th-right-text-1">Create new account</div>
          <div class="th-right-text-2">
            Already a member?{" "}
            <Link to="/login" className="th-right-link">
              Login
            </Link>
          </div>
        </div>
        <div class="th-register-col-1 col-md-4 offset-md-1 col-sm-8 offset-sm-2">
          <form class="p-3 registration-form"
            onSubmit = {(event) => {
              event.preventDefault();
              signup(userState, history)
              
            }}
          >
            <div class="row justify-content-center">
              <div class="col-md-12 col-12 mb-4">
                <div className="th-form-group">
                  <input
                    type="text"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange = {(event) => {
                        const name = event.target.value;
                        setUserState({...userState, ...{ name }})
                    }}
                  />
                  <label>
                    Name <span className="th-required-span">*</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-6 mb-4">
                <div className="th-form-group">
                  <input
                    type="email"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange = {(event) => {
                      const email = event.target.value;
                      setUserState({...userState, ...{ email }})
                  }}
                  />
                  <label>
                    Email-ID <span className="th-required-span">*</span>
                  </label>
                </div>
              </div>
              <div class="col-md-6 col-6 mb-4">
                <div className="th-form-group">
                  <input
                    type="text"
                    className="th-form-control form-control"
                    id=""
                    maxLength={20}
                    name=""
                    onChange = {(event) => {
                      const contactNumber = event.target.value;
                      setUserState({...userState, ...{ contactNumber }})
                  }}
                  />
                  <label>
                    Phone No. <span className="th-required-span">*</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div className="th-form-group">
                <input
                  type="text"
                  className="th-form-control form-control"
                  id=""
                  name=""
                  onChange = {(event) => {
                    const referenceCAid = event.target.value;
                    setUserState({...userState, ...{ referenceCAid }})
                }}
                  
                />
                <label>Reference CA-ID (if any)</label>
              </div>
            </div>
            <div class="row">
              <div className="th-form-group">
                <input
                  type="text"
                  className="th-form-control form-control"
                  id=""
                  name=""
                  onChange = {(event) => {
                    const password = event.target.value;
                    setUserState({...userState, ...{ password }})
                }}
                />
                <label>Create Password</label>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-md-6 th-registration-btn-1" th-form-group>
                <button class="th-registration-btn-2 btn mt-4" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="th-register-col-2-web col-md-6 offset-md-1 col-sm-12 th-register-right-web">
          <div class="th-right-text-1">Create new account</div>
          <div class="th-right-text-2">
            Already a member?{" "}
            <Link to="/login" className="th-right-link">
              Login
            </Link>
          </div>
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
    signup : (userState, history) => {
      dispatch(SignupAuthAction(userState, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);