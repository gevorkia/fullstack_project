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
    this.linkToggle = this.linkToggle.bind(this)
    this.popupToggle = this.popupToggle.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
      email: "demouser@trails.com",
      password: "password",
    };
    this.props.processDemo(demoUser);
  }


   linkToggle() {
      if (this.props.formType === "Sign Up") {
        return "Already have an account?"
      } else {
        return "Don't have an account?"
      }
    }
 
    popupToggle() {
      if (this.props.formType === "Sign Up") {
        return "Create your free account"
      } else {
        return "Log in and let's get going"
      }
    }

  render() {
   
    // console.log(this.props)

    // const linkToggle = () => {
    //   if (this.props.formType === "Sign Up") {
    //     return "Already have an account?"
    //   } else {
    //     return "Don't have an account?"
    //   }
    // }

    let errors = null;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => {
        return <ul className="popup-errors" key={idx}>{error}</ul>;
      });
    }

    const printErrors = (error) => {
      // debugger
      if (this.props.errors.includes(error)) {
        // debugger
        return (
          <ul className="popup-errors">
            {error}
          </ul>
        );
      }
    }

    return (
      <div className="session-form">
        <div className="signup-login-popup">
          <div className="popup-wrapper">
            <form className="signup-popup">
              <div className="popup-header">{this.popupToggle()}</div>
              {this.props.formType === "Sign Up" ? (
                <>
                  <input
                    className="input-text"
                    type="test"
                    placeholder="First name"
                    required
                    value={this.state.first_name}
                    onChange={this.handleInput("first_name")}
                  />
                  {printErrors("First name can't be blank")}
                  <input
                    className="input-text"
                    type="text"
                    placeholder="Last name"
                    required
                    value={this.state.last_name}
                    onChange={this.handleInput("last_name")}
                  />
                  {printErrors("Last name can't be blank")}
                </>
              ) : (
                <></>
              )}

              <input
                className="input-text"
                type="text"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={this.handleInput("email")}
              />
              {printErrors("Email can't be blank")}
              <input
                className="input-text"
                type="password"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
              {printErrors("Password is too short (minimum is 6 characters)")}
              {printErrors("Invalid username/password combination")}

              <button className="popup-button" onClick={this.handleSubmit}>
                {this.props.formType}
              </button>
              <br />
              <span className="opp-button">
                <p className="navlink">
                  {this.linkToggle()} {this.props.navLink}
                </p>
              </span>

              <p className="navlink">
                Explore the trails as a
                <a onClick={this.demoUserLogin}> demo user</a>
              </p>
              {/* <div className="pop-up-bottom"></div> */}
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;