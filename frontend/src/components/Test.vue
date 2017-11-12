<template>
  <v-data-table
      v-bind:headers="headers"
      :tasks="tasks"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" scope="props">
      <td>{{ props.tasks.title }}</td>
      <td class="text-xs-left">{{ props.tasks.description }}</td>      
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
      <td class="text-xs-left">{{ props.tasks.status[0] }}</td>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  props: ['tasks'],
  data () {
    return {
      tasks: this.$router.params,
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
          sortable: false,
          align: 'left'
        },
        {
          text: 'Update',
          value: 'update',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Status',
          value: 'status',
          sortable: false,
          align: 'left'
        }
      ],
      taskId: '',
      message: '',
      theIndex: ''
    }
  },
  // mounted () {
  //   this.getTasks()
  // },
  methods: {
    // getTasks: function () {
    //   axios.get('/api/tasks').then(response => {
    //     this.tasks = response.data
    //   })
    // },
    deleteTask: function () {
      axios.delete('/api/tasks/' + this.taskId).then(response => {
        this.message = response.data.message
        this.getTasks()
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
        this.message = response.data.message
        this.getTasks()
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
    margin-right: 1rem;
  }
</style>
