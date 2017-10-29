<template>
  <div class="container-fluid">
    <div class="row justify-content-start">
      <div class="col-4">
        Hello World
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tabs: ['Pending', 'Ongoing', 'Completed'],
        tabsContent: {}
      }
    },
    methods: {
      getTodos: function () {
        axios.get('/api/tasks').then(response => {
          this.tabsContent = response.data
        })
      }
    },
    mounted () {
      this.getTodos()
    }
  }
</script>