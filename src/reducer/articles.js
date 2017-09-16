import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants';
import {arrToMap} from '../helpers';


export default (articleState = {}, action) => {
  const {type, payload, randomId, response} = action;

  console.log('articles reducer randomId ===>', randomId);

  switch (type) {
    case LOAD_ALL_ARTICLES:
      return arrToMap(response);

    case DELETE_ARTICLE:
      const tmpState = {...articleState};
      delete tmpState[payload.id];
      return tmpState;

    case ADD_COMMENT:
      const article = articleState[payload.articleId];
      return {
        ...articleState,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      };
  }

  return articleState;
};