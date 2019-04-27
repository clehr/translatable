import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, VueAxios, axios)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
