import { Template } from 'meteor/templating';
import { setMessage, getMessage } from '../../../lib/globals';
import { UserList } from '../../../api/users.js';
Meteor.subscribe('users.public');

import './register.html';

Template.register.onCreated(function() {
    if (!Session.get('user')) {
        FlowRouter.go('home');
    }
});

Template.register.events({
    'submit .userRegister'(event) {

        // Prevent default browser form submit
        event.preventDefault();
    
        // Get value from form element
        const target = event.target;
        const fullname = target.fullname.value;
        const username = target.username.value;
        const password = target.password.value;
    
        // find user
        var user = UserList.findOne({ username: username });
        if (user) {
            $("#msg").html("Username unavailable");
        } else {
            setMessage("New user registered: " + fullname);
            // Insert a user into the collection
            UserList.insert({
                fullname: fullname,
                username: username,
                password: password
            }); 
            FlowRouter.go('content');     
        }
    },
});