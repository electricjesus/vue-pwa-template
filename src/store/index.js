import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: undefined
}
const mutations = {
}
const actions = {
}

const getters = {
  authenticated: state => typeof state.user === 'undefined' ? false : true
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})