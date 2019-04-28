import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import Vue2TouchEvents from 'vue2-touch-events'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
Vue.use(Vuesax, Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
