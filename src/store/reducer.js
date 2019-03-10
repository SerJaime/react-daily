import { combineReducers } from 'redux-immutable';
import { reducer as indexReducer} from '../containers/index/store';
import { reducer as detailReducer} from '../containers/detail/store';
import { reducer as commentsReducer} from '../containers/comments/store';

const reducer = combineReducers({
  index: indexReducer,
  detail: detailReducer,
  comments: commentsReducer
});

export default reducer;