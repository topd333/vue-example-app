import Vue from 'vue'
import Vuex from 'vuex'
import { default as list } from './components/vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    list
  },
  strict: debug
})
