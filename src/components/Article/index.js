import React, {Component} from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen';
import {CSSTransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {loadArticle, deleteArticle} from '../../AC';
import CommentList from '../CommentList';
import Loader from '../Loader';

import './article.css';


class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      updateIndex: 0
    };
  }

  componentWillReceiveProps({isOpen, loadArticle, article}) {
    if (isOpen && !article.text && !article.loading) loadArticle(article.id);
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.handleDelete}>delete me</button>
        <CSSTransitionGroup
          transitionName='article'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    );
  }

  getBody() {
    const {article, isOpen} = this.props;

    if (!isOpen) return null;

    if (article.loading) return <Loader />;

    return (
      <section>
        {article.text}
        <CommentList article={article}/>
      </section>
    );
  }

  handleDelete = () => {
    const {deleteArticle, article} = this.props;
    deleteArticle(article.id);
  };
}


export default connect(null, {deleteArticle, loadArticle})(Article);