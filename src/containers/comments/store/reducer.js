import { fromJS } from 'immutable';
import * as constants from "./constants";

const defaultState = fromJS({
  longComments: [],
  shortComments: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LONG_COMMENTS:
      return state.set('longComments', action.comments);
    case constants.CHANGE_SHORT_COMMENTS:
      return state.set('shortComments', action.comments);
    default:
      return state;
  }
}