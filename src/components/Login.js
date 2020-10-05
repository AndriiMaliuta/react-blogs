import React, { Component } from 'react';
import AuthService from '../api/AuthService';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      invalidLoginData: false,
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
    AuthService.authenticate(this.state.username, this.state.password)
      .then((response) => {
        AuthService.registerSuccessfulLogin(
          this.state.username,
          response.data.jwt
        );

        this.props.history.push('/dashboard');
      })
      .catch((error) => console.log(error));
    this.setState((state) => ({
      isLoggedIn: AuthService.isUserLoggedIn(
        this.state.username,
        this.state.password
      ),
      invalidLoginData: true,
    }));
    console.log('****** before redirection');
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        {this.state.invalidLoginData && (
          <p>Please enter correct Username and Password</p>
        )}
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
          type='password'
          name='password'
          placeholder='password'
        />
        <button onClick={this.handleLoginCLicked}>Login</button>
        {/* </form> */}
      </div>
    );
  }
}
