import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import CommentsPagination from '../CommentsPagination';


function CommentsPage({match}) {
  if (match.isExact) return <Redirect to="/comments/1" />;
  return <Route path="/comments/:page" render={getCommentsPaginatior} />
}


function getCommentsPaginatior({match}) {
  return <CommentsPagination page={match.params.page} />
}


export default CommentsPage;