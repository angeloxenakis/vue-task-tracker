<template>
    <div>
        <div class="title">
            <h1>Vue Task Tracker</h1>
        </div>
        <div class="tool-bar">
            <button>Create Task</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style scoped>
.task-tracker {
    width: 45%;
    margin: auto;
    border: 1px solid gray;
}

.tool-bar {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 8px;
}
</style>