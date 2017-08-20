import React, {Component} from 'react';
import Comment from './Comment';


export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  static defaultProps = {
    comments: []
  };

  render() {
    const isOpen = this.state.isOpen;

    return (
      <div>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  getBody() {
    if (!this.state.isOpen) return null;

    const {comments} = this.props;
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