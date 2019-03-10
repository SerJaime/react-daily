import { fromJS } from 'immutable';
import * as constants from "./constants";

const defaultState = fromJS({
  post: {},
  showBottomBar: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      return state.set('post', action.post);
    case constants.TOGGLE_BOTTOM_BAR:
      return state.set('showBottomBar', action.show);
    default:
      return state;
  }
}