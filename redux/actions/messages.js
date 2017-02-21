import { loading, error, finishedLoading } from './loadingState';

export const FETCH_MESSAGE = 'FETCH_MESSAGE';

function sendMessages(data) {
  return {
    type: FETCH_MESSAGE,
    data
  }
}
export function fetchMessage() {
  return (dispatch, getState) => {
    dispatch(loading());
    Meteor.call('fetchMessage', (err, data) => {
      if(err) {
        dispatch(error(err));
      }
      dispatch(sendMessages(data))
      dispatch(finishedLoading());
    })
  }
}