import { UserList } from '../../../api/users.js';
import { setMessage, getMessage } from '../../../lib/globals';

import './login.html';

Meteor.subscribe('users.public');

Template.login.events({
    'submit .userLogin'(event, instance) {
        // Prevent default browser form submit
        event.preventDefault();
        // Get value from form element
        const target = event.target;
        const username = target.username.value;
        const password = target.password.value;

        // find user
        var user = UserList.findOne({username: username});
        if (user) {
            Session.setPersistent('user', user.fullname);
            setMessage(user.fullname + " Welcome back !");
            FlowRouter.go('content');
        } else {
            $("#msg").html("Username/password not found");
        }
    },
});