import React, { Component } from 'react';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedOut: false };
  }
  handleRedirect = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('jwt');
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <>
        <div>You are logged out</div>
      </>
    );
  }
}
