import Vue from 'vue';
import VueRouter from 'vue-router';
import VueParticles from 'vue-particles';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import Home from './components/pages/Home.vue';
import Skills from './components/pages/Skills.vue';
import Projects from './components/pages/Projects.vue';
import Contact from './components/pages/Contact.vue';
import About from './components/pages/About.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faEnvelope, faTimesCircle, faFighterJet, faExpandArrowsAlt, faBolt, faLock, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faGithub, faCodepen, faFontAwesomeFlag } from  "@fortawesome/free-brands-svg-icons";
/* The library makes adding multiple icons at the top easier to filter into child components */

/* import app color themes from JSON */
import Themes from "./data/appThemeColors.json";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueParticles);

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(
  faBars,
  faLinkedin,
  faTwitter,
  faGithub,
  faCodepen,
  faEnvelope,
  faFighterJet,
  faBolt,
  faLock,
  faGlobe,
  faExpandArrowsAlt,
  faFontAwesomeFlag,
  faTimesCircle
);

const routes: Array<any> = [
  {
    path: "/",
    component: Home,
    props: {
      theme: Themes['home']
    }
  },
  {
    path: "/skills",
    component: Skills,
    props: {
      theme: Themes['skills']
    },
  },
  {
    path: "/projects",
    component: Projects,
    props: {
      theme: Themes['projects']
    },
  },
  {
    path: "/contact",
    component: Contact,
    props: {
      theme: Themes['contact']
    },
  },
  {
    path: "/about",
    component: About,
    props: {
      theme: Themes['about']
    },
  },
];

const router = new VueRouter({ routes, mode: 'history' });

Vue.use(VueAnalytics, {
  id: 'UA-35847828-1',
  router
});

// State management without Vuex
export const eventBus = new Vue({});

new Vue({
  el: '#app',
  router,
  render: (h: (arg0: any) => any) => h(App)
}).$mount('#app');
