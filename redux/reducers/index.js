import { combineReducers } from 'redux'
import Messages from './messages';
import LoadingStates from './loadingStates';
export default combineReducers({
  Messages,
  LoadingStates,
});
