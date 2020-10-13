import React from "react";
import { Route } from "react-router-dom";
import SignupContainer from "./session/signup_container"
import NavBarContainer from "./nav_bar/nav_bar_container";
import HomePage from "./home_page"
import { AuthRoute, ProtectedRoute } from "../utils/route_utils"

const App = () => (
  <div>
    <header>
      <h1>We are in App.jsx!</h1>
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={HomePage} />
      <AuthRoute path="/signup" component={SignupContainer} />
      {/* <AuthRoute path="/login" component={LoginContainer} /> */}

      <ProtectedRoute path="/users" component={ProfileContainer} />
      {/* if not logged in, don't allow user to see a profile page */}
    </header>
  </div>
);

export default App;