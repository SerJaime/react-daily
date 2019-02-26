import { fromJS } from 'immutable';
import * as constants from "./constants";

const defaultState = fromJS({
  banners: []
})

const changeHomeData = (state, action) => {
  return state.merge({
    banners: fromJS(action.banners)
  });
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_INDEX_DATA:
      return changeHomeData(state, action);
    default:
      return state;
  }
}