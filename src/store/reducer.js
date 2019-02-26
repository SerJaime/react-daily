import { combineReducers } from 'redux-immutable';
import { reducer as indexReducer} from '../containers/index/store';

const reducer = combineReducers({
  index: indexReducer
});

export default reducer;