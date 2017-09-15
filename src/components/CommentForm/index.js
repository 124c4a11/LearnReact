import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../../AC';

import './style.css';


const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 20,
    max: 50
  }
};


class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        user: <input
                value={this.state.user}
                onChange={this.handleChange('user')}
                className={this.getClassName('user')} />
        comment: <input
                    value={this.state.text}
                    onChange={this.handleChange('text')}
                    className={this.getClassName('text')} />
        <input type="submit" value="add comment" />
      </form>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      user: '',
      text: ''
    });
  };

  getClassName = (type) => this.state[type].length && this.state[type].length < limits[type].min ? 'form-input_error' : '';

  handleChange = (type) => (e) => {
    const {value} = e.target;

    if (value.length > limits[type].max) return;

    this.setState({
      [type]: value
    });
  };
}


export default connect(null, (dispatch, ownProps) => ({
  addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm);