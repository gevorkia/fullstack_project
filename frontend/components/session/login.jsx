import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state)
        .then(() => this.props.history.push("/"));
  }

  render() {
    // console.log(this.props);
    const errors = this.props.errors.map((error, idx) => {
      return (
        <ul>
          {error}
          <ul key={idx}>{error}</ul>
        </ul>
      )
    })

    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form>
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <button onClick={this.handleSubmit}>Log In!</button>
          </label>
        </form>
        {errors}
      </div>
    );
  }
}

export default Login;
