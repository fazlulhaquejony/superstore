import Vue from 'vue'
import App from './App.vue'

window.$=window.jQuery=require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
