import * as constants from './constants';
import axios from 'axios';
import { getToday, getDayBefore } from '../../../util';

const changeLongComments = comments => ({
  type: constants.CHANGE_LONG_COMMENTS,
  comments
})

const changShortComments = comments => ({
  type: constants.CHANGE_SHORT_COMMENTS,
  comments
})

export const getLongComments = id => {
  return (dispatch) => {
    axios.get(`/news/${id}/long-comments`).then((res) => {
      const result = res;
      dispatch(changeLongComments(result));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const getShortComments = id => {
  return (dispatch) => {
    axios.get(`/news/${id}/short-comments`).then((res) => {
      const result = res;
      dispatch(changeShortComments(result));
    }).catch((err) => {
      console.log(err);
    })
  }
}
