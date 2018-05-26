/* Dependencies */
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './pages/home.vue';
import Skills from './pages/skills.vue';
import Projects from './pages/projects.vue';
import Sandbox from './pages/sandbox.vue';
import Contact from './pages/contact.vue';
import About from './pages/about.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home},
  { path: "/skills", component: Skills},
  { path: "/projects", component: Projects},
  { path: "/sandbox", component: Sandbox},
  { path: "/contact", component: Contact},
  { path: "/about", component: About}
];

const router = new VueRouter({
  routes,  // this is ES6 for -> routes: routes //
  mode: "abstract"
});

new Vue({
  el: '#app',
  router, // this is ES6 for -> router: router //
  render: h => h(App)
}).$mount('#app');
