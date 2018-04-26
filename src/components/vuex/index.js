import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  groceries: [
    {
      id: 1,
      name: 'Bread',
      amount: 10,
      fridge: 1
    },
    {
      id: 2,
      name: 'Cake',
      amount: 3,
      fridge: 2
    }
  ],

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
