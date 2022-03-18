<template>
  <v-app>
    <v-main>
      <TaskTracker/>
    </v-main>
  </v-app>
</template>

<script>
import TaskTracker from './components/TaskTracker.vue'

export default {
  name: 'App',

  components: {
    TaskTracker
  },
  mounted() {
    this.$store.dispatch('getTasks')
  }
};
</script>
