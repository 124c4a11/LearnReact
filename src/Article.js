import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';


export default class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  };

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {this.toggleOpen}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </div>
    );
  };

  getBody() {
    if (!this.state.isOpen) return null;
    const {article} = this.props;
    return (
      <section>
        {article.text}
        <CommentsList comments = {article.comments}/>
      </section>
    );
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
};