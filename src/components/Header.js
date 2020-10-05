import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AuthService from '../api/AuthService';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogout = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('jwt');
    // this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div className='header'>
        <div className='header-elem'>
          <NavLink to='/dashboard' activeClassName='is-active' exact={true}>
            Home
          </NavLink>
        </div>
        <div className='header-elem'>
          <NavLink to='/blogs' activeClassName='is-active' exact={true}>
            Blogs
          </NavLink>
        </div>
        <div className='header-elem'>
          <NavLink to='/profile' activeClassName='is-active' exact={true}>
            Profile
          </NavLink>
        </div>
        <div className='header-elem'>
          <NavLink to='/' activeClassName='is-active' exact={true}>
            Login
          </NavLink>
        </div>
        <div className='header-elem'>
          <NavLink
            onClick={this.handleLogout}
            to='/logout'
            activeClassName='is-active'
            exact={true}
          >
            Logout
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
