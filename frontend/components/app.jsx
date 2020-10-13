import React from "react";
import { Route } from "react-router-dom";
import SignupContainer from "./session/signup_container"
// import HomePageContainer from "./home_page_container"

const App = () => (
  <div>
    <header>
      <h1>We are in App.jsx!</h1>
      {/* <Route path="/" component={HomePageContainer}/> */}
      <Route path="/signup" component={SignupContainer} />
    </header>
  </div>
);

export default App;