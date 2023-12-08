import Vue from "vue";
// import VueParticles from 'vue-particles';
// import VueAnalytics from 'vue-analytics';

import App from "./App.vue";
import { router } from "./router/index.ts";

Vue.config.productionTip = false;

// Vue.use(VueParticles);
// Vue.use(VueAnalytics, {
//   id: 'UA-35847828-1',
//   router
// });

// State management without Vuex
export const eventBus = new Vue({});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
