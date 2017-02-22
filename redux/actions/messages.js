import { loading, error, finishedLoading } from './loadingState';
import Messages from '../../imports/api/messages';

export const FETCH_MESSAGE = 'FETCH_MESSAGE';

function sendMessages(data) {
  return {
    type: FETCH_MESSAGE,
    data
  }
}
export function fetchMessage() {
  return (dispatch, getState) => {
    Meteor.subscribe("messages");
    allMessagesCursor = Messages.find();
    allMessagesCursor.observe({
      added: function(doc, beforeIndex) {
        console.log("added a message", doc.text)
        dispatch(sendMessages(doc));
      }
    })
  };
}