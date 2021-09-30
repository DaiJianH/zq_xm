import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "amfe-flexible";
Vue.use(MintUI);

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);

import axios from 'axios'
axios.defaults.baseURL='http://localhost:3000/';
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
