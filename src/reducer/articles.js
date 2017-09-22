import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS, START, SUCCESS} from '../constants';
import {arrToMap} from '../helpers';
import {OrderedMap, Map, Record} from 'immutable';


const ArticleRecord = Record({
  id: '',
  text: '',
  title: '',
  loading: false,
  commentsLoading: false,
  commentsLoaded: false,
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
    case LOAD_ALL_ARTICLES + START:
      return articleState.set('loading', true);

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true);

    case LOAD_ARTICLE + START:
      return articleState.setIn(['entities', payload.id, 'loading'], true);

    case LOAD_ARTICLE + SUCCESS:
      return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response));

    case DELETE_ARTICLE:
      return articleState.deleteIn(['entities', payload.id]);

    case ADD_COMMENT:
      return articleState.updateIn(['entities', payload.article.id, 'comments'],
      (comments) => comments.concat(randomId));

    case LOAD_ARTICLE_COMMENTS + START:
      return articleState.setIn(['entities', payload.articleId, 'commentsLoading'], true)

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return articleState
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)
        .setIn(['entities', payload.articleId, 'commentsLoaded'], true);
  }

  return articleState;
};