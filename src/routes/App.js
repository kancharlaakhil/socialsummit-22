import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Loader from "../app/loader";
import Header from "../app/layouts/header/index";
import Footer from "../app/layouts/Footer/index";
import { ComingSoon } from "../app/components/ComingSoon";
import DelegateDashboard from "../app/components/Dashboard/DelegateDashboard/Dashboard";
import CADashboard from "../app/components/Dashboard/CADashboard/Dashboard";
import UploadTaskForm from "../app/admin/UploadTaskForm";
import RegisterCAForm from "../app/admin/RegisterCA";
import ShowTasks from "../app/admin/ShowTasks";

import { connect } from "react-redux";
import GetAllRegistration from "../app/admin/GetAllRegistration";

const Home = React.lazy(() => import("../app/components/Home"));
const About = React.lazy(() => import("../app/components/About"));
const SignUpForm = React.lazy(() => import("../app/auth/SignUpForm"));
const LoginForm = React.lazy(() => import("../app/auth/LoginForm"));
const ProfileCompletionForm = React.lazy(() =>
  import("../app/auth/ProfileCompletionForm")
);
const Contact = React.lazy(() => import("../app/components/ContactUs"));
const Events = React.lazy(() => import("../app/components/Events"));
//const Profile = React.lazy(() => import("../app/components/Dashboard/ProfileNew") )
const SpecificEvents = React.lazy(() =>
  import("../app/components/SpecificEvents/ExecutiveBoard")
);

const App = ({ user }) => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={["/home", "/"]} component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/speakers" component={ComingSoon} />
          <Route exact path="/partners" component={ComingSoon} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/event1" component={SpecificEvents} />

          {!user.isLoggedIn ? (
            <Route exact path="/dashboard" component={ComingSoon} />
          ) : user.user.role === "delegate" ? (
            <Route exact path="/dashboard" component={DelegateDashboard} />
          ) : (
            <Route exact path="/dashboard" component={CADashboard} />
          )}
          {!user.isLoggedIn ? (
            <Route exact path="/profileCompletion" component={ComingSoon} />
          ) : (
            <Route
              exact
              path="/profileCompletion"
              component={ProfileCompletionForm}
            />
          )}
          {user.isLoggedIn && user.user.role === "admin" ? (
            <Route
              exact
              path="/admin/uploadTasks"
              component={UploadTaskForm}
            ></Route>
          ) : (
            <Route exact path="/admin/uploadTasks" component={ComingSoon} />
          )}
          {user.isLoggedIn && user.user.role === "admin" ? (
            <Route
              exact
              path="/admin/registerCA"
              component={RegisterCAForm}
            ></Route>
          ) : (
            <Route exact path="/admin/registerCA" component={ComingSoon} />
          )}
          {user.isLoggedIn && user.user.role === "admin" ? (
            <Route
              exact
              path="/admin/getAllUsers"
              component={GetAllRegistration}
            ></Route>
          ) : (
            <Route exact path="/admin/getAllUsers" component={ComingSoon} />
          )}
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
