/* App Dependencies */
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics';
import VueParticles from 'vue-particles';

/* Page imports */
import App from './App.vue';
import Home from './pages/home.vue';
import Skills from './pages/skills.vue';
import Projects from './pages/projects.vue';
import Contact from './pages/contact.vue';
import About from './pages/about.vue';

/* Font Awesome for Vue */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faEnvelope, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faGithub, faCodepen } from  "@fortawesome/free-brands-svg-icons";
/* The library makes adding multiple icons at the top easier to filter into child components */

/* import app color themes from JSON */
import Themes from "./data/appThemeColors.json";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueParticles);

library.add(faBars, faLinkedin, faTwitter, faGithub, faCodepen, faEnvelope, faTimesCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const routes = [
  { path: "/", component: Home, props: { theme: Themes['home']}},
  { path: "/skills", component: Skills, props: { theme: Themes['skills']}},
  { path: "/projects", component: Projects, props: { theme: Themes['projects']}},
  { path: "/contact", component: Contact, props: { theme: Themes['contact']}},
  { path: "/about", component: About, props: { theme: Themes['about']}}
];

const router = new VueRouter({
  routes,  // this is ES6 for -> routes: routes //
  mode: "history"
});

Vue.use(VueAnalytics, {
  id: 'UA-35847828-1',
  router
});

// State management without Vuex
export const eventBus = new Vue({});

new Vue({
  el: '#app',
  data() {
    return {}
  },
  router, // this is ES6 for -> router: router //
  render: h => h(App)
}).$mount('#app');
