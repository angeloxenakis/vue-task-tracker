import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        taskItems: [],
    },
    getters: {
        allTasks: state => state.taskItems
    },
    mutations: {
        GET_TASKS: (state, taskItems) => {
            state.taskItems = taskItems
        }
    },
    actions: {
        getTasks({ commit }) {
            axios.get('http://localhost:3000/task_items').then(resp => {
                commit('GET_TASKS', resp.data)
            })
        }
    }
})
