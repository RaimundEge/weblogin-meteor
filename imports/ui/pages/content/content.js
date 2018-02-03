import { setMessage, getMessage } from '../../../lib/globals';

import './content.html';

Template.content.onCreated(function() {
    if (!Session.get('user')) {
        FlowRouter.go('home');
    }
});

Template.content.helpers({
    message() {
    //    console.log('content page message: ' + Session.get('user'));       
        
        return getMessage();
    },
});

Template.content.events({
    'click .userLogout'(event) {
        setMessage("You have been logged out");
        Session.clear();
        FlowRouter.go('home');
    },
});