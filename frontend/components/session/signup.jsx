import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        //create location state to keep track of all fields of form we'll be building
        
        this.state = {
            firstName: '', 
            lastName: '', 
            email: '', 
            aboutMe: '', 
            location: '', 
            privacy: false,  //boolean default: false
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // any keys that match our state will get updated
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()  
        // b/c default action of button sends post request and causes re-render
    
        this.props.createNewUser(this.state)
            // .then( () => this.props.history.push(`/users/${user.id?}`))
            // we want to go to user show page ?
    }

    render() {
        // how to do email and password on first sign-up? and then 
        // privacy input, radio-button?
        return (
          <div className="session-form">
            <h2>Sign Up!</h2>
            <form>
              <label>
                First Name:
                <input
                  type="test"
                  value={this.state.firstName}
                  onChange={this.handleInput("firstName")}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleInput("lastName")}
                />
              </label>
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
              </label>
              <label>
                About Me:
                <input
                  type="text"
                  value={this.state.aboutMe}
                  onChange={this.handleInput("aboutMe")}
                />
              </label>
              <label>
                Privacy:
                <input
                  type="radio"
                  value={this.state.privacy}
                  onChange={this.handleInput("privacy")}
                />
              </label>
              <button onClick={this.handleSubmit}>Sign Up</button>
            </form>
          </div>
        );
    }
}

export default Signup;