import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import toggleOpen from '../../decorators/toggleOpen';
import {CSSTransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {deleteArticle} from '../../AC';

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

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    );
  }

  handleDelete = () => {
    const {deleteArticle, article} = this.props;
    deleteArticle(article.id);
  };
}


export default connect(null, {deleteArticle})(Article);