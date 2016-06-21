// Libs
import {Meteor} from 'meteor/meteor';
import {Router} from 'meteor/akryum:vue-router';

// Not found
import NotFound from '/imports/ui/NotFound.vue';
Router.on('*', {
  component: NotFound
});

// App layout
import AppLayout from '/imports/ui/AppLayout.vue';

// App start
Meteor.startup(() => {
  // Start the router and create root vue instance
  Router.start({
    history: true,
    saveScrollPosition: true
  }, AppLayout, 'app');
});
