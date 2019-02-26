import { connect } from "react-redux";
import { actionCreators } from './store';
import Index from "../../views/index/index";

const mapState = (state) => ({
  banners: state.getIn(['index', 'banners'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getBanners());
  }
});

export default connect(mapState, mapDispatch)(Index);