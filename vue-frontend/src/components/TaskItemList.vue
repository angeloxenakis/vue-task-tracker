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
        <v-btn  color="primary">+</v-btn>
    </v-card-title>
    <v-data-table :headers="headers" :items="taskItems" :items-per-page="5" :search="search">
        <template v-slot:[`item.completed`]="{ item }">
            <v-simple-checkbox v-model="item.completed"/>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon class="mr-2" @click="deleteItem(item)">mdi-pencil</v-icon>
            <v-icon class="mr-2" @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
    </v-data-table>
</v-card>
</template>

<script>
export default {
    name: 'TaskItemList',
    computed: {
        taskItems() {
            return this.$store.getters.allTasks
        }
    },
    data() {
        return {
            headers: [
                {text: "Task", value: 'name', align: 'start'},
                {text: "Priority", value: 'priority'},
                {text: "Due Date", value: 'due_date'},
                {text: "Completed", value: 'completed'},
                {text: "Actions", value: 'actions', sortable: false},
            ],
            search: '',
        }
    },
    methods: {
        deleteItem(item) {
            console.log(item)
        }
    }
}
</script>

<style scoped>
.search-bar{
    width: 60%;
}

</style>