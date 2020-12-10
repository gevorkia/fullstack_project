import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  // ^to make sure we have a variable we can use
  // preloadedState mimics the shape of our state; would actually go in and
  // replace it. it's being passed in instead of nullSession in sessionsReducer

  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser,
      },
    };
  }
  const store = configureStore(preloadedState);
  //   const store = configureStore();

  ReactDOM.render(<Root store={store} />, root);

});

// testing on window

// // 1. thunk action creators
// window.fetchPark = fetchPark;
// window.fetchParkTrails = fetchParkTrails;

// // 1. thunk action creators
// window.fetchReviews = fetchReviews;
// window.createReview = createReview;
// window.updateReview = updateReview;
// window.deleteReview = deleteReview;

// // 2. state tests
// window.getState = store.getState;
// window.dispatch = store.dispatch;


// OTHER TESTING: 
// Test your routes using $.ajax methods in the console. You should be able to create a user, log out, and log in.

// $.ajax({method: "POST", url: "/api/users", data: { user: {
//      first_name: "Lili", 
//      last_name: "Gevorkian", 
//      email:  "liligevorkian@gmail.com",
//      about_me: '',
//      location: '',
//      privacy: true,
//      password: "password"
// }}}).then(response => console.log(response));

// const sampleUser = {
//      first_name: "Lili", 
//      last_name: "Gevorkian", 
//      email:  "banana3@gmail.com",
//      about_me: '',
//      location: '',
//      privacy: true,
//      password: "password"
// }

// $.ajax({method: "POST", url: "/api/users", data: { user: { sampleUser }}}.then(response => console.log(response)));

// signup(user)
// signup(user).then(success => console.log(success), errors => console.log(errors)); 

// const user = { username: "test11", password: "password" };
// dispatch(login(user));
// dispatch(logout());

// dispatch(login(user2)).then(
//   (success) => console.log(success),
//   (errors) => console.log(errors)
// ); 

  // 1. auth tests
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;

  // 2. thunk action creator tests
  // window.signup = signupUser;
  // window.login = loginUser;
  // window.logout = logoutUser;