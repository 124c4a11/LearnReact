import React, {Component} from 'react';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';


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
            <div><NavLink activeStyle={{color: 'red'}} to="/articleList">articleList</NavLink></div>
          </div>
          <UserForm />
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articleList" component={ArticleList} />
        </div>
      </Router>
    );
  }
}