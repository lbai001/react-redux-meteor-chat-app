import {
  LOADING,
  ERROR,
  FINISHED_LOADING,
} from '../actions/loadingState';

export default function loadingStates(state = {loading: false, error: null, finishedLoading: false}, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.err,
      }
    case FINISHED_LOADING:
      return {
        ...state,
        loading: false,
        finishedLoading: true,
      }
    default:
      return state;
  }
}
