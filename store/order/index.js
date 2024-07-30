export const state = () => ({
  product_ids: []
})

export const getters = {}

export const mutations = {
  SET_PRODUCT_IDS(state, payload) {
    state.product_ids = payload
  }
}

export const actions = {
  INCREMENT({ commit }) {
    commit('SET_COUNT')
  }
}
