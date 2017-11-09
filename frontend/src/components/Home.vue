<template>
  <v-data-table
      v-bind:headers="headers"
      :items="tasks"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" scope="props">
      <td>{{ props.item.title }}</td>
      <td class="text-xs-left">{{ props.item.description }}</td>
      <td class="text-xs-left">{{ props.item.status[0] }}</td>
      <td class="text-xs-left">
        <v-icon class="point"
        @click="theIndex = props.indexOf; logger()"
        >create</v-icon>
        <v-icon class="point"
        @click ="taskId = props.item._id; completeTask()"
        >done</v-icon>
        <v-icon class="point"
        @click="taskId = props.item._id; deleteTask()"
        >delete</v-icon>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        {
          text: 'Description',
          value: 'description',
          align: 'left'
        },
        {
          text: 'Status',
          value: 'status',
          align: 'left'
        },
        {
          text: 'Update',
          value: 'status',
          align: 'left'
        }
      ],
      tasks: [],
      taskId: '',
      theIndex: ''
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
    },
    completeTask: function () {
      axios({
        method: 'put',
        url: '/api/tasks/' + this.taskId,
        data: {
          status: 'completed'
        }
      }).then(response => {
        this.taskId.$set = response.data.message
      })
    },
    logger: function () {
      console.log(this.theIndex)
    }
  }
}
</script>

<style scoped>
  .point {
    cursor: pointer;
  }
</style>
