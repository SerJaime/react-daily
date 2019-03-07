import { fromJS } from 'immutable';
import * as constants from "./constants";
import { getToday } from '../../../util';

const defaultState = fromJS({
  showHeader: false,
  banners: [],
  todayNews: [],
  updatedDate: getToday(),
  beforeNewsList: [],
  isPullUpLoad: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    banners: fromJS(action.banners),
    todayNews: fromJS(action.todayNews)
  });
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_INDEX_DATA:
      return changeHomeData(state, action);
    case constants.TOGGLE_ISPULLUPLOAD:
      return state.set('isPullUpLoad', action.isLoad);
    case constants.ADD_NEWS_LIST:
      return state.set('beforeNewsList', state.get('beforeNewsList').concat(action.list));
    case constants.CHANGE_UDATED_DATE:
      return state.set('updatedDate', action.updatedDate);
    case constants.TOGGLE_HEADER_SHOW:
      return state.set('showHeader', action.showHeader);
    default:
      return state;
  }
}