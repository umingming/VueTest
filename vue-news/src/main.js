import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false

new Vue({
    router, //router: router같이 앞뒤 문법이 같으면 축약 가능
    store,
    render: h => h(App)
}).$mount('#app')