import * as constants from './constants';
import axios from 'axios';
import { getToday, getDayBefore } from '../../../util';

const changeCommentsInfo = result => ({
  type: constants.CHANGE_COMMENTS_INFO,
  result
})

const changeLongComments = comments => ({
  type: constants.CHANGE_LONG_COMMENTS,
  comments
})

const changeShortComments = comments => ({
  type: constants.CHANGE_SHORT_COMMENTS,
  comments
})

export const getCommentsInfo = id => {
  return (dispatch) => {
    axios.get(`/news/${id}/extra-info`).then(res => {
      const result = res;
      dispatch(changeCommentsInfo(result));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const getLongComments = id => {
  return (dispatch) => {
    axios.get(`/news/${id}/long-comments`).then((res) => {
      const result = res.comments;
      dispatch(changeLongComments(result));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const getShortComments = id => {
  return (dispatch) => {
    axios.get(`/news/${id}/short-comments`).then((res) => {
      const result = res.comments;
      dispatch(changeShortComments(result));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const toggleShortCommentsShow = show => ({
  type: constants.TOGGLE_SHORTCOMMENTS_SHOW,
  show
})