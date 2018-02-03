import { Template } from 'meteor/templating';
import { setMessage, getMessage } from '../../../lib/globals';

import './home.html';

Template.home.helpers({
    user() {
        return Session.get('user');
    },
    message() {
        return getMessage();
    },
});
  