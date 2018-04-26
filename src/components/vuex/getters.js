export default {
  getGroceryList: (state, getters) => () => {
    return state.groceries
  }
}
