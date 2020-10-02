import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <div className='header-elem'>
      <NavLink to='/' activeClassName='is-active' exact={true}>
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
  </div>
);

export default Header;
