export const addGrocery = ({ commit }, grocery) => {
  commit('ADD_GROCERY', { grocery })
}

export const deleteGrocery = ({ commit }, key) => {
  commit('DELETE_GROCERY', { key })
}

export const updateFridge = ({ commit }, val) => {
  commit('UPDATE_FRIDGE', { val })
}

export const applyFridge = ({ commit }) => {
  commit('APPLY_FRIDGE')
}

export const initFridge = ({ commit }) => {
  commit('INIT_FRIDGE')
}
