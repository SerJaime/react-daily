import { connect } from "react-redux";
import { actionCreators } from './store';
import Detail from "../../views/detail";

const mapState = (state) => ({
  post: state.getIn(['detail', 'post']),
  showBottomBar: state.getIn(['detail', 'showBottomBar'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
  toggleBottomShow(show) {
    dispatch(actionCreators.toggleBottomShow(show));
  }
});

export default connect(mapState, mapDispatch)(Detail);