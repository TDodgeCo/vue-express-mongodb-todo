<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-for="task in tasks">
      <h2 v-for="task in tasks">{{task.title}}</h2>
      <p @click="taskId = task._id; deleteTask()">{{task._id}}</p>
      <p>{{task.description}}</p>
    </div>
    <p>{{taskId}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tasks: {},
      taskId: ''
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
    },
    deleteTask: function () {
      axios.delete('/api/tasks/' + this.taskId).then(response => {
        this.taskId = response.data.message
      })
    }
  }
}
</script>

<style scoped>
</style>
