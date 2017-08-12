import React, {Component} from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';
import Counter from './Counter';
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
        <ArticleList />
      </div>
    );
  }

  changeSelection = (selection) => this.setState({ selection });
}