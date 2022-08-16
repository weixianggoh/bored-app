export const ADD_TO_HISTORY = 'ADD_TO_HISTORY'
export const REMOVE_FROM_HISTORY = 'REMOVE_FROM_HISTORY'

export const state = () => ({
  data: [],
})

export const getters = {
  history: (state) => {
    return state.data
  },
}

export const actions = {
  addToHistory: function ({ commit }, payload) {
    commit(ADD_TO_HISTORY, payload)
  },
  removeFromHistory: function ({ commit }, payload) {
    commit(REMOVE_FROM_HISTORY, payload)
  },
}

export const mutations = {
  [ADD_TO_HISTORY](state, payload) {
    state.data.push(payload)
  },
}
