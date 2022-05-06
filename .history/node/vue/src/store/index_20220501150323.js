import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    user: {}
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user
  },
  mutations: {
    setAuthenticated(state, isAuth) {
      if(isAuth) state.isAuthenticated = isAuth
      else state.isAuthenticated = false
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setAuthenticated(context, isAuth) {
      context.commit('setAuthenticated', isAuth)
    },
    setUser(context, user) {
      context.commit('setUser', user)
    }
  },
  modules: {
  }
})
