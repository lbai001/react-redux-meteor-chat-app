import { Meteor } from 'meteor/meteor';
import '../imports/api/messages.js';
import Messages from '../imports/api/messages'

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    fetchMessage() {
      return Messages.find({}).fetch();
    },
    insertMessage(messageData) {
      return Messages.insert({ text: messageData.text, createdAt: messageData.createdAt, userId: messageData.userId })
    },
  });
});
