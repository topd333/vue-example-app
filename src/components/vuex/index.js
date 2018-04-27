import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const state = {
  groceries: loadState() || [],

  fridges: [
    { value: 1, text: 'Fridge 1' },
    { value: 2, text: 'Fridge 2' },
    { value: 3, text: 'Fridge 3' }
  ]
}

export default {
  state,
  actions,
  mutations,
  getters
}
