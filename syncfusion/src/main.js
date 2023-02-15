import Vue from 'vue'
import App from './App.vue'
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';


Vue.use(DiagramPlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
