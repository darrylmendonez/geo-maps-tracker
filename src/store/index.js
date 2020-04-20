import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: `Geo Maps Tracker`,
    paramsId: {
      newParamsId: null
    },
    aboutSection: {
      description: `This social media app tracks your location when given permission and allows you to see other user's locations an profiles. You are able to chat on their profile page along with other users.`,
      tools: [
        `<em>Vue.js</em> is the javascript framework used to develop as a single-page application`,
        `<em>Vuex</em> is used for state management`,
        `<em>Google Maps api</em> is used for the map component and markers are clickable to link to profile of user`,
        `<em>Firebase Database</em> is used for its real-time database which allows for the chat feature`,
        `<em>Firebase Authentication</em> is used for user registration and login`
      ]
    }
  },
  getters: {
    getParamsId: state => {
      return state.paramsId
    },
    getTitle: state => {
      return state.title
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
