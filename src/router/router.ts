import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import { validRoutes as routes } from "./validRoutes.ts";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes,
} as RouterOptions);
