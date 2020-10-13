import React from 'react';
import HomePage from "../home_page/home_page"

class Signup extends React.Component {
    constructor(props) {
        super(props);
        //create location state to keep track of all fields of form we'll be building
        
        this.state = {
            first_name: '', 
            last_name: '', 
            email: '', 
            about_me: '', 
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
            .then( () => this.props.history.push('/'))
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
                  value={this.state.first_name}
                  onChange={this.handleInput("first_name")}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={this.state.last_name}
                  onChange={this.handleInput("last_name")}
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
                  value={this.state.about_me}
                  onChange={this.handleInput("about_me")}
                />
              </label>
              <label>
                Privacy:
                <input
                  type="radio"
                  value={this.state.privacy}
                  onChange={this.handleInput("privacy")}
                  id={this.state.privacy.toString()}
                />
              </label>
              <button onClick={this.handleSubmit}>Sign Up</button>
            </form>
            <HomePage/>
          </div>
        );
    }
}

export default Signup;