export const state = () => ({
  count: 0
})

export const getters = {}

export const mutations = {
  SET_COUNT(state) {
    state.count = state.count + 1
  }
}

export const actions = {
  INCREMENT({ commit }) {
    commit('SET_COUNT')
  }
}
