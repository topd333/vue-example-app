import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { findKey, findIndex } from 'lodash'

export default {
  ADD_GROCERY (state, { grocery }) {
    let key = findKey(state.groceries, { name: grocery.name, fridge: grocery.fridge })

    if (key) {
      state.groceries[key].amount++
    } else {
      key = uuidv4()

      state.groceries = [
        ...state.groceries,
        {
          id: key,
          name: grocery.name,
          fridge: grocery.fridge,
          amount: 1
        }
      ]
    }
  },

  DELETE_GROCERY (state, { key }) {
    let index = findIndex(state.groceries, { id: key })

    if (state.groceries[index].amount > 1) {
      state.groceries[index].amount--
    } else {
      Vue.delete(state.groceries, index)
    }
  }
}
