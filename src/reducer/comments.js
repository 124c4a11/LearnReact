import {normalizedComments as defaultComments} from '../fixtures';
import {arrToMap} from '../helpers';


const commentsMap = arrToMap(defaultComments);


export default (commentsState = commentsMap, action) => {
  const {type, payload} = action;

  switch (type) {
  }

  return commentsState;
};