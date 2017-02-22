import { Meteor } from 'meteor/meteor';
import '../imports/api/messages.js';
import Messages from '../imports/api/messages'

Meteor.startup(() => {
  Meteor.publish('messages', function() {
    return Messages.find();
  });
});
