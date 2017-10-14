import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import PropTypes from 'prop-types';
import history from '../history';

import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';
import Articles from './routes/Articles';
import NotFound from './routes/NotFound';
import CommentsPage from './routes/CommentsPage';


export default class App extends Component  {
  static propTypes = {
  };

  static childContextTypes = {
    user: PropTypes.string
  };

  getChildContext() {
    return {
      user: this.state.username
    };
  };

  state = {
    username: ''
  };

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <div>
            <h2>Main menu</h2>
            <div><NavLink activeStyle={{color: 'red'}} to="/counter">counter</NavLink></div>
            <div><NavLink activeStyle={{color: 'red'}} to="/filters">filters</NavLink></div>
            <div><NavLink activeStyle={{color: 'red'}} to="/articles">articles</NavLink></div>
          </div>
          <UserForm value={this.state.username} onChange={this.handleUserChange} />
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/articles" component={Articles} />
            <Route path="/comments" component={CommentsPage} />
            {/* <Redirect from="/comments/" to="/comments/1" /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  };

  handleUserChange = (username) => this.setState({username});
}