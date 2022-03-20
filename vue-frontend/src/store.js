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
        }
    },
    actions: {
        getTasks({ commit }) {
            axios.get('http://localhost:3000/task_items').then(resp => {
                commit('GET_TASKS', resp.data)
            })
        },
        // deleteTaskItem({commit}, { taskItem }) {
        //     console.log(taskItem)
        //     axios.delete(`http://localhost:3000/task_items/${taskItem.id}`).then((taskItem) => {
        //         commit('DELETE_TASK', taskItem.id)
        //     })
        // },
        async deleteTask({commit}, taskItem) {
            let response = await axios.delete(`http://localhost:3000/task_items/${taskItem.id}`);
            if(response.status == 200 || response.status == 204){
              commit('DELETE_TASK', taskItem.id);
            }
        },
    }
})
