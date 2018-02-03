import { setMessage, getMessage } from '../../../lib/globals';

import './body.html';

Template.App_body.helpers({
    user() {
        return Session.get('user');
    },
});
Template.App_body.events({
    'click .userLogout'(event) {
        setMessage("You have been logged out");
        Session.clear();
        FlowRouter.go('home');
    },
});
  