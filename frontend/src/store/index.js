import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  actions: {
    getTasks: function ({ commit }) {
      axios.get('/api/tasks/')
      .then(response => {
        commit('setTasks', { list: response.data })
      })
    }
  },
  mutations: {
    setTasks (state, list) {
      state.tasks = list
    }
  },
  getters: {
    openTasks: state => {
      return state.tasks.filter(tasks => !tasks.completed)
    }
  }
})

export default store
