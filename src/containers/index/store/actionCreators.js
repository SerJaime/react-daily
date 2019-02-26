import * as constants from './constants';
import axios from 'axios';

const changeIndexData = (result) => ({
  type: constants.CHANGE_INDEX_DATA,
  banners: result
})

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