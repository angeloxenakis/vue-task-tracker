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
        <v-spacer></v-spacer>
        <v-btn  color="primary">+</v-btn>
    </v-card-title>
    <v-data-table :headers="headers" :items="taskItems" :items-per-page="5"/>
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
                {text: "Task", value: 'name', align: 'start', filterable: false},
                {text: "Priority", value: 'priority'},
                {text: "Due Date", value: 'due_date'},
                {text: "Completed", value: 'completed'}
            ]
        }
    }
}
</script>

<style scoped>
.search-bar{
    width: 60%;
}

</style>