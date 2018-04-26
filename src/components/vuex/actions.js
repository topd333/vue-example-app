export const addGrocery = ({ commit }, grocery) => {
  commit('ADD_GROCERY', { grocery })
}

export const deleteGrocery = ({ commit }, key) => {
  commit('DELETE_GROCERY', { key })
}
