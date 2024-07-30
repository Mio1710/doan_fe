export const state = () => ({
  validationErrors: []
})

export const getters = {}

export const mutations = {
  VALIDATION_ERRORS(state, payload) {
    state.validationErrors = payload
  }
}

export const actions = {}
