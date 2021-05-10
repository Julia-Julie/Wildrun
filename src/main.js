import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { faUser } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// // library.add(faUserSecret)
// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false


// Vue.config.productionTip = false

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {
//   faTwitter,
//   faFacebook,
//   faStackOverflow,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faBars, faTwitter, faFacebook, faUsers, faStackOverflow, faGithub);
// Vue.component("font-awesome-icon", FontAwesomeIcon);

// Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
