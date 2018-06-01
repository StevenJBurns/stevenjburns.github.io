/* Dependencies */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Page imports */
import App from './App.vue';
import Home from './pages/home.vue';
import Skills from './pages/skills.vue';
import Projects from './pages/projects.vue';
import Contact from './pages/contact.vue';
import About from './pages/about.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home},
  { path: "/skills", component: Skills},
  { path: "/projects", component: Projects},
  { path: "/contact", component: Contact},
  { path: "/about", component: About}
];

const router = new VueRouter({
  routes,  // this is ES6 for -> routes: routes //
  mode: "history"
});

// State management without Vuex
export const eventBus = new Vue({});

new Vue({
  el: '#app',
  router, // this is ES6 for -> router: router //
  render: h => h(App)
}).$mount('#app');
