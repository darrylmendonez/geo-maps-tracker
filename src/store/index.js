import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paramsId: {
      newParamsId: null
    }
  },
  getters: {
    getParamsId: state => {
      return state.paramsId
    }
  },
  mutations: {
    setParamsId (state, payload) {
      state.paramsId = payload
    }
  },
  actions: {
    setParamsId (context, payload) {
      setTimeout(() => {
        context.commit('setParamsId', payload)
      }, 2000)
    }
  }
})
