import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
      updateCards(state, cards) {
          state.cards = cards
      },
  },
  actions: {
    async fetchCards({ commit }, category) {
      const res = await fetch('http://jsonplaceholder.typicode.com/photos?_limit=6&albumId=' + category)
      const cards = await res.json()
      commit('updateCards', cards)
    },
    async allFetchs({commit}){
      const res = await fetch('http://jsonplaceholder.typicode.com/photos?albumId=1&albumId=2&albumId=3&albumId=4')
      const cards = await res.json()
      commit('updateCards', cards)
    }
  },
  getters: {
    allCards(state) {
        return state.cards
    },
  },
  modules: {
  }
})
