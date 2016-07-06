// Libs
import {Meteor} from 'meteor/meteor';
import {Router} from 'meteor/akryum:vue-router';

// Create router instance
const router = new Router({
  history: true,
  saveScrollPosition: true
});

// App layout
import AppLayout from '/imports/ui/AppLayout.vue';

// App start
Meteor.startup(() => {
  // Start the router
  router.start(AppLayout, 'app');
});
