import { connect } from "react-redux";
import { actionCreators } from './store';
import Hot from "../../views/hot";

const mapState = (state) => ({
  hotNews: state.getIn(['hot', 'hotNews'])
});

const mapDispatch = (dispatch) => ({
  getHotNews() {
    dispatch(actionCreators.getHotNews());
  }
});

export default connect(mapState, mapDispatch)(Hot);