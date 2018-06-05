/* App Dependencies */
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

const appColorThemes = {
  home : {
    dark: "#405060",
    light: "#708090"
  },
  skill: {
    dark: "#809070",
    light: "#A0B0C0"
  },
  projects: {
    dark: "#707040",
    light: "#909060"
  },
  contact: {
    dark: "#303050",
    light: "#707090"
  },
  about: {
    dark: "#778899",
    light: "#445566"
  }
};

const routes = [
  { path: "/", component: Home, /* props: appColorThemes[home] */},
  { path: "/skills", component: Skills, /* props: appColorThemes[skills] */},
  { path: "/projects", component: Projects, /* props: appColorThemes[projects] */},
  { path: "/contact", component: Contact, /* props: appColorThemes[contact] */},
  { path: "/about", component: About, /* props: appColorThemes[about] */}
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
