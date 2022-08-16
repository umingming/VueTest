import { createApp } from 'vue'
import App from './App.vue'
import { store } from "./store/store"

// new Vue({
//     el: '#app',
//     store,
//     render: h => h(App)
// })
    
// import { createApp } from 'vue'
// import App from './App.vue'
// import { store } from './store/store.js'

createApp(App).use(store).mount('#app')