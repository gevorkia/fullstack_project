import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupContainer from "./session/signup_container"
import LoginContainer from "./session/login_container"

import NavBarContainer from "./nav_bar/nav_bar_container";
import HomePage from "./home_page/home_page"
import ErrorPage from "./error_page/error_page"
import Footer from "./footer/footer"
import { AuthRoute, ProtectedRoute } from "../utils/route_utils"

const App = () => (
  <div>
      <NavBarContainer />
        {/* <h1>app</h1> */}
        {/* <Route path="/" component={div} /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <AuthRoute path="/signup" component={SignupContainer} />
          <AuthRoute path="/login" component={LoginContainer} />
          {/* <AuthRoute path="/login" component={LoginContainer} /> */}

          <Route component={ErrorPage} />
          {/* <ProtectedRoute path="/users" component={ProfileContainer} /> */}
          {/* if not logged in, don't allow user to see a profile page */}
        </Switch>
      {/* <Footer/> */}
  </div>
);

export default App;