import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { attachSchema } from 'meteor/aldeed:collection2';

const Messages = new Mongo.Collection('messages');

Messages.schema = new SimpleSchema({
  text: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  userId: {
    type: Number,
  },
  userName: {
    type: String,
  }
})

Meteor.methods({
  fetchMessageHistory() {
    return Messages.find().fetch();
  },
  insertMessage(messageData) {
    return Messages.insert({ text: messageData.text, createdAt: new Date(), userId: messageData.userId, userName: messageData.userName })
  },
})

export default Messages;
