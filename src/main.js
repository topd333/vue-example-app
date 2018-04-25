// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {fieldsBagName: 'inputs'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
