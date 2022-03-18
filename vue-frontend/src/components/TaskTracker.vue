<template>
<div>
    <div class="task-tracker">
      <AppHeader/>
      <TaskItemList/>
    </div>
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
    width: 50%;
    margin: auto;
    padding: 16px;
    border: 1px solid rgb(192, 192, 192);
}
</style>