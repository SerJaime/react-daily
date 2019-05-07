import * as constants from './constants';
import axios from 'axios';

export const getHotNews = () => {
  return (dispatch) => {
    axios.get('/news/hot').then((res) => {
      const list = res.recent;
      dispatch({
        type: constants.GET_HOT_DATA,
        list
      });
    }).catch((err) => {
      console.log(err);
    })
  }
}