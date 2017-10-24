<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2 v-for="task in tasks">{{task.name}}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tasks: {}
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks: function () {
      axios.get('/api/tasks').then(response => {
        this.tasks = response.data
      })
    }
  }
}
</script>

<style scoped>
</style>
