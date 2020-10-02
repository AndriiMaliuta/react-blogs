import React, { Component } from 'react';
import AuthService from '../api/AuthService';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }
  //   handleSubmit(event) {
  //     event.preventDefault();
  //     console.log(event.target);
  //     // let username = event.target
  //     authenticate();
  //   }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLoginCLicked = () => {
    AuthService.authenticate(this.state.username, this.state.password);
    this.setState((state) => ({
      isLoggedIn: AuthService.isuserLoggedIn(
        this.state.username,
        this.state.password
      ),
    }));
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        {this.state.isLoggedIn ? <p>Yes</p> : <p>No</p>}
        {/* <form onSubmit={this.handleSubmit}> */}
        <input
          onChange={this.handleChange}
          id='username'
          type='text'
          name='username'
          placeholder='username'
        />
        <input
          onChange={this.handleChange}
          id='password'
          type='text'
          name='password'
          placeholder='password'
        />
        <button onClick={this.handleLoginCLicked}>Login</button>
        {/* </form> */}
      </div>
    );
  }
}
