import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {filtratedArticlesSelector} from '../selectors';
import {loadAllArticles} from '../AC';

import Loader from './Loader';


class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  };

  componentDidMount() {
    const {loaded, loading, loadAllArticles} = this.props;
    if (!loaded && !loading) this.props.loadAllArticles();
  }

  render() {
    const {articles, loading} = this.props;

    if (loading) return <Loader />;

    const articleElements = articles.map((article) => <li key={article.id}>
      <NavLink activeStyle={{color: "red"}} to={`/articles/${article.id}`}>{article.title}</NavLink>
    </li>);

    return (
      <div>
        <ul>
          {articleElements}
        </ul>
      </div>
    );
  }
}


export default connect((state) => {
  return {
    articles: filtratedArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
  };
}, {loadAllArticles})(ArticleList);