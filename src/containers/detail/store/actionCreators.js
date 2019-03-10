import * as constants from './constants';
import { URL_PICTURE } from '../../../api/url';
import axios from 'axios';
import { getToday, getDayBefore } from '../../../util';

const changeDetail = post => ({
  type: constants.CHANGE_DETAIL,
  post
})

export const getDetail = id => {
  return (dispatch) => {
    axios.get(`/news/${id}`).then((res) => {
      res.body = res.body.replace(/src="http/g, 'src="' + URL_PICTURE + 'http');
      res.body = res.body.replace(/src="https/g, 'src="' + URL_PICTURE + 'https');
      const result = res;
      dispatch(changeDetail(result));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const toggleBottomShow = show => ({
  type: constants.TOGGLE_BOTTOM_BAR,
  show
})