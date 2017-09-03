import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm';


class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    // from toggleOpen
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {isOpen, toggleOpen} = this.props;

    return (
      <div>
        <button onClick={toggleOpen}>
          {isOpen ? 'hide comments' : 'show comments'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const {comments, isOpen} = this.props;

    if (!isOpen) return null;

    if (!comments.length) return (
      <div>
        <p>No comments yep!</p>
        <CommentForm />
      </div>
    );

    return (
      <div>
        <ul>
          {comments.map((comment) => <li key={comment.id}>
            <Comment comment={comment} />
          </li>)}
        </ul>
        <CommentForm />
      </div>
    );
  }
}


export default toggleOpen(CommentList);