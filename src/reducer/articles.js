import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants';
import {arrToMap} from '../helpers';
import {Map, Record} from 'immutable';


const ArticleRecord = Record({
  id: '',
  text: '',
  title: '',
  comments: []
});

const defaultState = new Map({});


export default (articleState = defaultState, action) => {
  const {type, payload, randomId, response} = action;

  switch (type) {
    case LOAD_ALL_ARTICLES:
      return arrToMap(response, ArticleRecord);

    case DELETE_ARTICLE:
      return articleState.delete(payload.id);

    case ADD_COMMENT:
      return articleState.updateIn([payload.article.id, 'comments'], (comments) => comments.concat(randomId));
  }

  return articleState;
};