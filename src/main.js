import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import {store} from './store/Store'
const axios = require('axios').default;



Vue.config.productionTip = false

new Vue({
  vuetify,
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
