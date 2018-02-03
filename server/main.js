import { Meteor } from 'meteor/meteor';
import { UserList } from '../imports/api/users.js';

Meteor.publish('users.public', function() {
  return UserList.find();
});

Meteor.startup(() => {
  // code to run on server at startup
  // console.log("users all: " + Users.find().fetch());

});
