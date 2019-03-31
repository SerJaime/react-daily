import { connect } from "react-redux";
import { actionCreators } from './store';
import Comments from "../../views/comments";

const mapState = (state) => ({
  commentInfo: state.getIn(['comments', 'commentInfo']),
  longComments: state.getIn(['comments', 'longComments']),
  shortComments: state.getIn(['comments', 'shortComments']),
  showShortComments: state.getIn(['comments', 'showShortComments'])
});

const mapDispatch = (dispatch) => ({
  initComments(newsId) {
    dispatch(actionCreators.getCommentsInfo(newsId));
    dispatch(actionCreators.getLongComments(newsId));
  },
  getShortComments(newsId) {
    dispatch(actionCreators.getShortComments(newsId));
  },
  toggleShortCommentsShow(show) {
    dispatch(actionCreators.toggleShortCommentsShow(show));
  }
});

export default connect(mapState, mapDispatch)(Comments);