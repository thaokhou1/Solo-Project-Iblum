import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountPage extends Component {
  state = {
    firstname: '',
    email: '',
    username: '',
    password: '',
    id: ''

  };

  updateUser = (event) => {
    event.preventDefault();

    if (this.state.firstname && this.state.email && this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'UPDATE',
        payload: {
          firstname: this.state.firstname,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,


        },
        
      });
    } else {
      this.props.dispatch({ type: 'UPDATE_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  removeUser = () => {
    this.props.dispatch({ type: 'DELETE', payload: this.state.id });
    
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.updateUser}>
          <h2>Update Account</h2>
          <div>
            <label htmlFor="firstname">
              Name:
              <input
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleInputChangeFor('firstname')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="Update Account"
              value="Update Account"
            />
            <button
              type="button"
              className="log-in"
              onClick={this.removeUser}
            >
              Delete Account
          </button>
          </div>
        </form>

      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(AccountPage);
