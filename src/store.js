import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
      { number: '1', text: 'buy milk' },
      { number: '2', text: 'Go to Dubai' },
      { number: '3', text: 'Buy a Jet' }
    ]
  },
  mutations: {
    addTodo (state, payload) {
      return state.lists.push({ number: state.lists.length + 1, text: payload })
    }

  },
  actions: {
    addTodo ({ commit }, payload) {
      commit('addTodo', payload)
    }

  }
})
