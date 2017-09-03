import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


export default function Comment({comment}) {
  return (
    <div>
      <p>{comment.text} <b>by {comment.user}</b></p>
    </div>
  );
}

Comment.propTypes = {
  // from connect
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
};