import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import ArticleList from '../ArticleList';
import Article from '../Article';


class Articles extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    );
  }

  getArticle = ({match}) => {
    const {id} = match.params;
    return <Article id={id} isOpen />
  };
}


export default Articles;