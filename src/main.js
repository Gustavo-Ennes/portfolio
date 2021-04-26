import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueTypedJs from 'vue-typed-js';
import Axios from "axios";
import Meta from 'vue-meta';


Axios.defaults.baseURL =  "https://api.ennes.dev/";


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//type js vue plugin
Vue.use(VueTypedJs)
// SEO
Vue.use(Meta);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
