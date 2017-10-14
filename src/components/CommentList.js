import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import {loadArticleComments} from '../AC';

import Comment from './Comment';
import CommentForm from './CommentForm';
import Loader from './Loader';


class CommentList extends Component {
  static contextTypes = {
    store: PropTypes.object,
    router: PropTypes.object,
    user: PropTypes.string
  };

  componentWillReceiveProps({isOpen, article, loadArticleComments}) {
    if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
      loadArticleComments(article.id);
    }
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;

    return (
      <div>
        <h3>User: {this.context.user}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'hide comments' : 'show comments'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const {article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen} = this.props;

    if (!isOpen) return null;
    if (commentsLoading) return <Loader />;
    if (!commentsLoaded) return null;

    if (!comments.length) {
      return (
        <div>
          <p>No comments yep!</p>
          <CommentForm articleId={id}/>
        </div>
      );
    }

    return (
      <div>
        <ul>
          {comments.map((id) => <li key={id}>
            <Comment id={id} />
          </li>)}
        </ul>
        <CommentForm articleId={id}/>
      </div>
    );
  }
}


export default connect(null, {loadArticleComments}, null, {pure: false})(toggleOpen(CommentList));