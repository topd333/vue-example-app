// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'
import Toasted from 'vue-toasted'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {fieldsBagName: 'inputs'})
Vue.use(Toasted, {
  theme: 'outline',
  position: 'top-right',
  duration: 3000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
