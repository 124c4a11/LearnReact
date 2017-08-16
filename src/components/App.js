import React, {Component} from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Counter from './Counter';
import Filters from './Filters';

import 'react-select/dist/react-select.css';


export default class App extends Component {
  state = {
    selection: null
  };

  render() {
    return (
      <div>
        <Counter />
        <UserForm />
        <Filters />
        <ArticleList />
      </div>
    );
  }

  changeSelection = (selection) => this.setState({ selection });
}