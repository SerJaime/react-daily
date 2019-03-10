import * as constants from './constants';
import axios from 'axios';
import { getToday, getDayBefore } from '../../../util';

const changeIndexData = (result) => ({
  type: constants.CHANGE_INDEX_DATA,
  banners: result.top_stories,
  todayNews: result.stories
})

export const getLatestNews = () => {
  return (dispatch) => {
    axios.get('/news/latest').then((res) => {
      const result = res;
      dispatch(changeIndexData(result));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const toggleIsPullUpLoad = isLoad => ({
  type: constants.TOGGLE_ISPULLUPLOAD,
  isLoad
})

const addBeforeNews = list => ({
  type: constants.ADD_NEWS_LIST,
  list
})

export const loadMoreNewsOf3 = updatedDate => {
  return (dispatch) => {
    axios.get(`/news/before/${getDayBefore(1, updatedDate)}`).then((res) => {
      const result = res;
      dispatch(addBeforeNews(result));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const changeUpdatedDay = updatedDate => ({
  type: constants.CHANGE_UDATED_DATE,
  updatedDate
})

export const toggleHeaderShow = showHeader => ({
  type: constants.TOGGLE_HEADER_SHOW,
  showHeader
})