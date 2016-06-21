export default {
  '/': {
    name: 'home',
    component: '/imports/ui/Home.vue'
  },
  '/page1': {
    name: 'page1',
    component: '/imports/ui/Page1.vue',
    // Nested routes
    subRoutes: {
      '/a': {
        name: 'page1a',
        component: '/imports/ui/Page1A.vue'
      },
      '/b': {
        name: 'page1b',
        component: '/imports/ui/Page1B.vue'
      }
    }
  },
  '/page2': {
    name: 'page2',
    component: '/imports/ui/Page2.vue'
  }
}
