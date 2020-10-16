import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    //create location state to keep track of all fields of form we'll be building

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state).then(() => this.props.history.push("/"));
  }

  demoUserLogin() {
    const demoUser = {
      first_name: "demo",
      last_name: "user",
      email: "demouser@trails.com",
      password: "trails890",
    };
    this.setState(demoUser);
  }

  //this.setState

  render() {
    // how to do email and password on first sign-up? and then
    // privacy input, radio-button?
    // console.log(this.props)
    let errors = null;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => {
        return <ul key={idx}>{error}</ul>;
      });
    }

    return (
      <div className="session-form">
        <div className="signup-login-popup">
          <form className="signup-popup">
            {this.props.formType === "Sign Up" ? (
              <>
                {/* <label>
                  First Name: */}
                  <input
                    type="test"
                    placeholder="First name"
                    value={this.state.first_name}
                    onChange={this.handleInput("first_name")}
                  />
                {/* </label>
                {/* <br/> */}
                {/* <label>
                  Last Name: */}
                  <input
                    type="text"
                    placeholder="Last name"
                    value={this.state.last_name}
                    onChange={this.handleInput("last_name")}
                  />
                {/* </label> */}
              </>
            ) : (
              <></>
            )}

            {/* <label>
              Email: */}
              <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInput("email")}
              />
            {/* </label> */}
            {/* <label>
              Password: */}
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
            {/* </label> */}
            <button onClick={this.handleSubmit}>{this.props.formType}</button>
            <br></br>
            {this.props.navLink}
            <button onClick={this.demoUserLogin}>Log in as demo user</button>
          </form>
          {errors}
        </div>
      </div>
    );
  }
}

export default SessionForm