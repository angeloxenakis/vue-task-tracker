<template>
<v-card class="task-list">
    <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        <v-spacer/>
        <TaskModal/>
    </v-card-title>
    <v-data-table :headers="attrs" :items="taskItems" :items-per-page="5" :search="search">
        <template v-slot:[`item.completed`]="{ item }">
            <v-simple-checkbox @click="completeTask(item)" v-model="item.completed"/>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon class="mr-2">mdi-pencil</v-icon>
            <v-icon class="mr-2" @click="deleteTask(item)">mdi-delete</v-icon>
        </template>
    </v-data-table>
</v-card>
</template>

<script>
import { mapGetters } from "vuex"
import TaskModal from "./TaskModal.vue"

export default {
    name: 'TaskItemList',
    computed: {
        ...mapGetters({
            taskItems: 'allTasks'
        })
    },
    components: {
        TaskModal
    },
    data() {
        return {
            attrs: [
                {text: "Task", value: 'name', align: 'start'},
                {text: "Priority", value: 'priority'},
                {text: "Due Date", value: 'due_date'},
                {text: "Completed", value: 'completed'},
                {text: "Actions", value: 'actions', sortable: false},
            ],
            search: '',
            showModal: true
        }
    },
    methods: {
        completeTask(taskItem) {
            this.$store.dispatch('completeTask', taskItem)
        },
        deleteTask(taskItem) {
            this.$store.dispatch('deleteTask', taskItem)
        }
    }
}
</script>

<style scoped>
.search-bar{
    width: 60%;
}

.task-modal {
    display: none;
}
</style>