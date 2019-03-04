import * as constants from './constants';
import axios from 'axios';
import { getToday } from '../../../util';

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
    }).catch(() => {
      console.log('error');
    })
  }
}

export const getBanners = () => {
  return (dispatch) => {
    axios.get('/news/top').then((res) => {
      const result = res;
      dispatch(changeIndexData(result));
    }).catch(() => {
      console.log('error');
    })
  }
}

export const getTodayNews = () => {
  return (dispatch) => {
    axios.get(`/news/before/${getToday()}`).then((res) => {
      const result = res;
      dispatch(changeIndexData(result));
    }).catch(() => {
      console.log('error');
    })
  }
}