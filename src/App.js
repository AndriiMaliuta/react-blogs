import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashborad';
import BlogList from './components/BlogsList';
import Blog from './components/Blog';
import Profile from './components/Profile';
import Header from './components/Header';
import Login from './components/Login';
import AuthRoute from './routes/AuthRoute';
import Logout from './components/Logout';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <AuthRoute path='/blogs/:id' component={Blog} exact={true} />
          <AuthRoute path='/blogs' component={BlogList} exact={true} />
          <AuthRoute path='/profile' component={Profile} exact={true} />
          <AuthRoute path='/dashboard' component={Dashboard} exact={true} />
          <Route path='/' component={Login} exact={true} />
          <Route path='/logout' component={Logout} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
