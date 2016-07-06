// Import the router
import {Router} from 'meteor/akryum:vue-router';

// Not found
import NotFound from '/imports/ui/NotFound.vue';

Router.configure(router => {
  router.on('*', {
    component: NotFound
  });
});
