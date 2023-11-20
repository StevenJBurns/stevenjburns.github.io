import { RouteConfig } from 'vue-router';
import { default as Pages } from '../components/pages/index.ts';
import Themes from '../style/appThemeColors.json';

const {
  Home,
  Skills,
  Projects,
  Contact,
  About,
} = Pages;

export const validRoutes: ReadonlyArray<RouteConfig> = [
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
