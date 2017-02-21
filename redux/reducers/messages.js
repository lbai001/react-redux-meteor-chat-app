import {
  FETCH_MESSAGE
} from '../actions/messages';

export default function (state = { isFetching: false, history: [] }, action) {
  switch (action.type) {
    case FETCH_MESSAGE:
      return {
        ...state,
        history: action.data,
      };
    default:
      return state;
  }
}
