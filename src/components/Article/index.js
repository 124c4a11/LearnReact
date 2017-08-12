import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';
import CommentsList from '../CommentsList';
import toggleOpen from '../../decorators/toggleOpen';
import {deleteArticle} from '../../AC';
import './style.css';


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
  };

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        <button onClick = {this.handleDelete}>delete me</button>
        <CSSTransitionGroup
          transitionName = 'article'
          transitionEnterTimeout = {300}
          transitionLeaveTimeout = {500}
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    );
  };

  handleDelete = () => {
    const {deleteArticle, article} = this.props;
    deleteArticle(article.id);
  };

  getBody() {
    const {article, isOpen} = this.props;
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <CommentsList comments = {article.comments}/>
      </section>
    );
  };
}


export default connect(null, {deleteArticle})(Article);