import { connect } from "react-redux";
import { actionCreators } from './store';
import Comments from "../../views/comments";

const mapState = (state) => ({
  longComments: state.getIn(['comments', 'longComments']),
  shortComments: state.getIn(['comments', 'shortComments'])
});

const mapDispatch = (dispatch) => ({
  getLongComments(newsId) {
    dispatch(actionCreators.getLongComments(newsId));
  },
  getShortComments(newsId) {
    dispatch(actionCreators.getShortComments(newsId));
  }
});

export default connect(mapState, mapDispatch)(Comments);