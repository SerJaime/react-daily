import { fromJS } from 'immutable';
import * as constants from "./constants";

const defaultState = fromJS({
  commentInfo: {},
  longComments: [],
  shortComments: [],
  showShortComments: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_COMMENTS_INFO:
      return state.set('commentInfo', fromJS(action.result));
    case constants.CHANGE_LONG_COMMENTS:
      return state.set('longComments', fromJS(action.comments));
    case constants.CHANGE_SHORT_COMMENTS:
      return state.set('shortComments', fromJS(action.comments));
    case constants.TOGGLE_SHORTCOMMENTS_SHOW:
      return state.set('showShortComments', action.show);
    default:
      return state;
  }
}