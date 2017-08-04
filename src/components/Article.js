import React, {Component} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import toggleOpen from '../decorators/toggleOpen';
import './article.css';


export default class Article extends Component {
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