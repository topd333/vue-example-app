import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { findKey, findIndex, cloneDeep } from 'lodash'

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error(`Something went wrong: ${err}`)
  }
}

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
    state.n_groceries = state.groceries
    saveState(state.groceries)
    Vue.toasted.show('Grocery Added')
  },

  DELETE_GROCERY (state, { key }) {
    let index = findIndex(state.groceries, { id: key })

    if (state.groceries[index].amount > 1) {
      state.groceries[index].amount--
    } else {
      Vue.delete(state.groceries, index)
    }
    state.n_groceries = state.groceries
    saveState(state.groceries)
    Vue.toasted.show('Grocery Removed')
  },

  INIT_FRIDGE (state) {
    state.n_groceries = cloneDeep(state.groceries)
  },

  UPDATE_FRIDGE (state, { val }) {
    let index = findIndex(state.n_groceries, { id: val.id })
    let key = findKey(state.n_groceries, { name: state.n_groceries[index].name, fridge: val.fridge })

    if (key) {
      state.n_groceries[key].amount += state.n_groceries[index].amount
      Vue.delete(state.n_groceries, index)
    } else {
      state.n_groceries[index].fridge = val.fridge
    }
  },

  APPLY_FRIDGE (state) {
    state.groceries = state.n_groceries
    saveState(state.groceries)
    Vue.toasted.show('Fridge Updated')
  }
}
