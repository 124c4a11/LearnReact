import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants';
import {arrToMap} from '../helpers';
import {OrderedMap, Map, Record} from 'immutable';


const ArticleRecord = Record({
  id: '',
  text: '',
  title: '',
  comments: []
});


const ReducerState = new Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});


const defaultState = new ReducerState();


export default (articleState = defaultState, action) => {
  const {type, payload, randomId, response} = action;

  switch (type) {
    case LOAD_ALL_ARTICLES:
      return articleState.set('entities', arrToMap(response, ArticleRecord));

    case DELETE_ARTICLE:
      return articleState.deleteIn(['entities', payload.id]);

    case ADD_COMMENT:
      return articleState.updateIn(['entities', payload.article.id, 'comments'],
      (comments) => comments.concat(randomId));
  }

  return articleState;
};