import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';
import Articles from './routes/Articles';
import NotFound from './routes/NotFound';


export default class App extends Component  {
  static propTypes = {
  };

  render() {
    return (
      <Router>
        <div>
          <div>
            <h2>Main menu</h2>
            <div><NavLink activeStyle={{color: 'red'}} to="/counter">counter</NavLink></div>
            <div><NavLink activeStyle={{color: 'red'}} to="/filters">filters</NavLink></div>
            <div><NavLink activeStyle={{color: 'red'}} to="/articles">articles</NavLink></div>
          </div>
          <UserForm />
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/articles" component={Articles} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}