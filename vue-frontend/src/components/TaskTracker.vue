<template>
  <div class="task-tracker">
    <AppHeader/>
    <TaskItemList/>
  </div>
</template>

<script>
import TaskItemList from "./TaskItemList.vue"
import AppHeader from "./AppHeader.vue"

export default {
    name: 'TaskTracker',
    components: {
        TaskItemList,
        AppHeader
    }
}
</script>

<style scoped>
.task-tracker {
    width: 45%;
    margin: auto;
    border: 1px solid gray;
}
</style>