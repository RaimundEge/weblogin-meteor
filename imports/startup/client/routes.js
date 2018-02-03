import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/content/content.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/register/register.js';

FlowRouter.route('/', {
  name: 'home',
  action(params, queryParams) {
    BlazeLayout.render('App_body', {main: 'home'});
  }
});
FlowRouter.route('/content', {
  name: 'content',
  action(params, queryParams) {
    BlazeLayout.render('App_body', {main: 'content'});
  }
});
FlowRouter.route('/login', {
  name: 'login',
  action(params, queryParams) {
    BlazeLayout.render('App_body', {main: 'login'});
  }
});
FlowRouter.route('/register', {
  name: 'register',
  action(params, queryParams) {
    BlazeLayout.render('App_body', {main: 'register'});
  }
});