import { connect } from "react-redux";
import { actionCreators } from './store';
import Index from "../../views/index/index";

const mapState = (state) => ({
  showHeader: state.getIn(['index', 'showHeader']),
  banners: state.getIn(['index', 'banners']),
  todayNews: state.getIn(['index', 'todayNews']),
  updatedDate: state.getIn(['index', 'updatedDate']),
  beforeNewsList: state.getIn(['index', 'beforeNewsList']),
  isPullUpLoad: state.getIn(['index', 'isPullUpLoad'])
});

const mapDispatch = (dispatch) => ({
  changeHeaderShow(scroll) {
    console.log(scroll)
    if (scroll.y < -220) {
      dispatch(actionCreators.toggleHeaderShow(true));
    } else {
      dispatch(actionCreators.toggleHeaderShow(false));
    }
  },
  changeIndexData() {
    dispatch(actionCreators.getLatestNews());
  },
  loadMoreNews(updatedDate) {
    console.log('loading');
    dispatch(actionCreators.toggleIsPullUpLoad(true));
    dispatch(actionCreators.loadMoreNewsOf3(updatedDate));
  },
  changeIsPullUpLoad(isLoad) {
    dispatch(actionCreators.toggleIsPullUpLoad(isLoad));
  },
  changeUpdatedDay(updatedDate) {
    dispatch(actionCreators.changeUpdatedDay(updatedDate))
  }
});

export default connect(mapState, mapDispatch)(Index);