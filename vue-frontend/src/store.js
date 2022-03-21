import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        taskItems: [],
    },
    getters: {
        allTasks: state => state.taskItems,
    },
    mutations: {
        GET_TASKS: (state, taskItems) => {
            state.taskItems = taskItems
        },
        DELETE_TASK: (state, taskItemId) => {
            state.taskItems = state.taskItems.filter(taskItem => taskItem.id != taskItemId)
        },
        COMPLETE_TASK: (state, taskItemId) => {
            state.taskItems = state.taskItems.map(taskItem => {
                if (taskItem.id === taskItemId) {
                    return Object.assign({}, taskItem, !taskItem.completed )
                }
                return taskItem
            })
        }
    },
    actions: {
        getTasks({ commit }) {
            axios.get('http://localhost:3000/task_items').then(resp => {
                commit('GET_TASKS', resp.data)
            })
        },
        async completeTask({ commit }, taskItem) {
            axios.patch(`http://localhost:3000/task_items/${taskItem.id}`,
                {completed: taskItem.completed}
            )
            commit('COMPLETE_TASK', taskItem.id)
        },
        async deleteTask({ commit }, taskItem) {
            let response = await axios.delete(`http://localhost:3000/task_items/${taskItem.id}`);
            if(response.status == 200 || response.status == 204) {
                commit('DELETE_TASK', taskItem.id);
            }
        },
    }
})
