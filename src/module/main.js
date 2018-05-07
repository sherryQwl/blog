import Vue from 'vue'
import App from './App'
import router from '../router'

Vue.config.productionTip = false

/* eslint-disable no-new */
const AppConfigure = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export default AppConfigure;
