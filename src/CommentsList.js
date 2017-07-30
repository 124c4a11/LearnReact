import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
  static defaultProps = {
    comments: []
  };

  state = {
    isOpen: false
  };

  render() {
    const {isOpen} = this.state;

    return (
      <div>
        <button onClick = {this.toggleOpen}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </div>
    );
  };

  getBody() {
    if(!this.state.isOpen) return null;

    const {comments} = this.props;
    if (!comments.length) return <p>no comments</p>

    return (
      <ul>
        {comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>)}
      </ul>
    );
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}