import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils"

import SignupContainer from "./session/signup_container"
import LoginContainer from "./session/login_container"

import NavBar from "./nav_bar/nav_bar";
import HomePage from "./home_page/home_page"
import Footer from "./footer/footer"

import ParkShow from "./park/park_show"
// import TrailIndexItemDetailMap from "./trail/trail_index_item_detail_map"
import TrailIndexItemDetail from "./trail/trail_index_item_detail"

const App = () => (
  <div>
      <NavBar/>
        {/* <h1>app</h1> */}
        {/* <Route path="/" component={div} /> */}
        <Switch>
          <AuthRoute exact path="/login" component={LoginContainer} />
          <AuthRoute exact path="/signup" component={SignupContainer} />
          <Route exact path='/parks/:parkId'component={ParkShow}/>
          <Route exact path='/trails/:trailId/' component={TrailIndexItemDetail}/>
          {/* <Route exact path='/trails/:trailId/map'component={TrailIndexItemDetailMap}/> */}
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
         
          {/* <ProtectedRoute path="/users" component={Profile} /> */}
        </Switch>
      <Footer/>
  </div>
);

export default App;

// exact path will render a component only to that exact path
// protected route will not allow a user to see that page (ex: profile page)