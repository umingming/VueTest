import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //router: router같이 앞뒤 문법이 같으면 축약 가능
}).$mount('#app')
