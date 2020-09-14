/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import Axios from "axios";
import store from './store'
import VueSweetAlert from 'vue-sweetalert2'

import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import ArgonDashboard from './plugins/argon-dashboard';
import vSelect from 'vue-select';

import 'sweetalert2/dist/sweetalert2.min.css';


import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false
Vue.prototype.$http  =  Axios;


Vue.use(ArgonDashboard);
Vue.component('v-select', vSelect);
Vue.use(VueSweetAlert);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
