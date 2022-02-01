import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Loader from "../app/loader";
import Header from "../app/layouts/header/index";
import { ComingSoon } from "../app/components/ComingSoon";
import UserCard from "../app/components/Dashboard/UserCard";



const Home = React.lazy(() => import("../app/components/Home"));
const About = React.lazy(() => import("../app/components/About"));
const SignUpForm = React.lazy(() => import("../app/auth/SignUpForm"));
const LoginForm = React.lazy(() => import("../app/auth/LoginForm"));
const Profile = React.lazy(() => import("../app/components/Dashboard/Profile") )


const App = (props) => {
  return (
    <BrowserRouter>
     
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={["/home", "/"]} component={ComingSoon} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/dashboard" component={UserCard} />
        </Switch>
      </Suspense>
    </BrowserRouter>
);
};
export default App;