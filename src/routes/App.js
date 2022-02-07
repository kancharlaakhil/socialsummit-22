import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Loader from "../app/loader";
import Header from "../app/layouts/header/index";
import { ComingSoon } from "../app/components/ComingSoon";
import Dashboard from "../app/components/Dashboard/Dashboard";



const Home = React.lazy(() => import("../app/components/Home"));
const About = React.lazy(() => import("../app/components/About"));
const SignUpForm = React.lazy(() => import("../app/auth/SignUpForm"));
const LoginForm = React.lazy(() => import("../app/auth/LoginForm"));
const Profile = React.lazy(() => import("../app/components/Dashboard/ProfileNew") )


const App = (props) => {
  return (
    <BrowserRouter>
     <Header/>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={["/home", "/"]} component={Home} />
          <Route exact path="/about" component={ComingSoon} />
          <Route exact path="/speakers" component={ComingSoon} />
          <Route exact path="/partners" component={ComingSoon} />
          <Route exact path="/events" component={ComingSoon} />
          <Route exact path="/contact" component={ComingSoon} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    </BrowserRouter>
);
};
export default App;