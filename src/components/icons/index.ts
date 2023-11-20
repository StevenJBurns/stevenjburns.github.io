import Vue from 'vue';

/* The library makes adding multiple icons at the top easier to filter into child components */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faEnvelope, faTimesCircle, faFighterJet, faExpandArrowsAlt, faBolt, faLock, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faGithub, faCodepen, faFontAwesomeFlag } from  "@fortawesome/free-brands-svg-icons";

// Vue.component('font-awesome-icon', FontAwesomeIcon);

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
