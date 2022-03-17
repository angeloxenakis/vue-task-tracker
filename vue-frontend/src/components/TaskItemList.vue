<template>
  <div class="task-list">
    <ul v-for="(taskItem, index) in taskItems" :key="index">
        <li>
            <div class="item-check"><input type="checkbox"/></div>
            <div class="item-name">{{ taskItem.name }} </div>
            <div class="item-priority">Priority: {{ taskItem.priority }} </div>
            <div class="item-date">Due: {{ taskItem.due_date }} </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'TaskItemList',
    computed: {
        taskItems() {
            return this.$store.getters.allTasks
        }
    },
}
</script>

<style scoped>
ul {
    margin: 8px;
    padding: 0px;
}

li {
    list-style-type: none;
    border: 1px solid gray;
    border-radius: 8px;
    margin: 0px;
    display: flex;
}

.item-check{
    border-right: 1px solid gray;
    padding: 8px;
}

.item-name{
    border-right: 1px solid gray;
    padding: 8px;
    width: 40%;
    text-align: left;
}

.item-priority{
    border-right: 1px solid gray;
    padding: 8px;
    width: 30%;
    text-align: left;
}

.item-date{
    padding: 8px;
    width: 30%;
    text-align: left;
}
</style>