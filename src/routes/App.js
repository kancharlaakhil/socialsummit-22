import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Loader from "../app/loader";

const Home = React.lazy(() => import("../app/components/Home"));
const About = React.lazy(() => import("../app/components/About"));

const App = (props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={["/home", "/"]} component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
