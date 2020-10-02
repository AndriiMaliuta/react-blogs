import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../api/AuthService';

const AuthRoute = (props) => {
  if (AuthService.isuserLoggedIn()) {
    return <Route {...props} />;
  } else return <Redirect to='/' />;
};

export default AuthRoute;
