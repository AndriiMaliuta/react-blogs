import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashborad';
import BlogList from './components/BlogsList';
import Blog from './components/Blog';
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/blogs/:id' component={Blog} exact={true} />
          <Route path='/blogs' component={BlogList} exact={true} />
          <Route path='/profile' component={Profile} exact={true} />
          <Route path='/' component={Dashboard} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
