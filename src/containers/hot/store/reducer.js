import { fromJS } from 'immutable';
import * as constants from "./constants";

const defaultState = fromJS({
  hotNews: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_HOT_DATA:
      return state.set('hotNews', fromJS(action.list));
    default:
      return state;
  }
}