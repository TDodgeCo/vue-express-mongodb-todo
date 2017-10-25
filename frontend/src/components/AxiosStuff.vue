<template>
  <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.sodium }}</td>
      <td class="text-xs-right">{{ props.item.calcium }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
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
