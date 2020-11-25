import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils"

import SignupContainer from "./session/signup_container"
import LoginContainer from "./session/login_container"

import NavBarContainer from "./nav_bar/nav_bar_container";
import HomePage from "./home_page/home_page"
import Footer from "./footer/footer"

import ParkShowContainer from "./park/park_show_container"
import TrailIndexItemDetailMapContainer from "./trail/trail_index_item_detail_map_container"
import TrailIndexItemDetailContainer from "./trail/trail_index_item_detail_container"

const App = () => (
  <div>
      <NavBarContainer />
        {/* <h1>app</h1> */}
        {/* <Route path="/" component={div} /> */}
        <Switch>
          <AuthRoute exact path="/login" component={LoginContainer} />
          <AuthRoute exact path="/signup" component={SignupContainer} />
          <Route exact path='/parks/:parkId'component={ParkShowContainer}/>
          <Route exact path='/trails/:trailId/' component={TrailIndexItemDetailContainer}/>
          {/* <Route exact path='/trails/:trailId/map'component={TrailIndexItemDetailMapContainer}/> */}
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
         
          {/* <ProtectedRoute path="/users" component={ProfileContainer} /> */}
        </Switch>
      <Footer/>
  </div>
);

export default App;

// exact path will render a component only to that exact path
// protected route will not allow a user to see that page (ex: profile page)