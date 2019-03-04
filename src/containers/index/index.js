import { connect } from "react-redux";
import { actionCreators } from './store';
import Index from "../../views/index/index";

const mapState = (state) => ({
  banners: state.getIn(['index', 'banners']),
  todayNews: state.getIn(['index', 'todayNews'])
});

const mapDispatch = (dispatch) => ({
  changeIndexData() {
    dispatch(actionCreators.getLatestNews());
  },
});

export default connect(mapState, mapDispatch)(Index);