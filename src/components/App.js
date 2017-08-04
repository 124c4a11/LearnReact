import React, {Component} from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';


class App extends Component {
  state = {
    userName: ''
  };

  render() {
    return (
      <div>
        <UserForm />
        <ArticleList articles = {this.props.articles}/>
      </div>
    );
  }
}

export default App;