import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';


class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    comments: []
  };

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

    if (!comments.length) return <p>No comments yep!</p>;

    return (
      <ul>
        {comments.map((comment) =>
          <li key={comment.id}><Comment comment={comment} /></li>
        )}
      </ul>
    );
  }
}


export default toggleOpen(CommentList);