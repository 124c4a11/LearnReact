import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen'


class CommentsList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    // from toggleOpen
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  static defaultProps = {
    comments: []
  };

  render() {
    const {isOpen, toggleOpen} = this.props;

    return (
      <div>
        <button onClick = {toggleOpen}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </div>
    );
  };

  getBody() {
    const {comments, isOpen} = this.props;
    if(!isOpen) return null;
    if (!comments.length) return <p>no comments</p>

    return (
      <ul>
        {comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>)}
      </ul>
    );
  };
}

export default toggleOpen(CommentsList);