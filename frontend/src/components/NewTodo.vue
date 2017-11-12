<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title class="headline">Create a new ToDo?</v-card-title>
          <v-form v-model="valid" class="pr-2 pl-2">
            <v-text-field
              label="Title"
              v-model="title"
              :rules="titleRules"
              :counter="10"
              required
            ></v-text-field>
            <v-text-field
              label="Description"
              v-model="description"
              :rules="descriptionRules"
              required
            ></v-text-field>
          </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = !dialog; modal()">Cancel</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = !dialog; submitTodo()">Sumbit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['dialog'],
    data () {
      return {
        valid: false,
        title: '',
        titleRules: [
          (v) => !!v || 'Title is required',
          (v) => v.length >= 10 || 'Title must be at least 10 characters'
        ],
        description: '',
        descriptionRules: [
          (v) => !!v || 'Description is required'
        ],
        message: ''
      }
    },
    methods: {
      modal: function () {
        this.$emit('newTodoClose', this.dialog)
      },
      submitTodo: function () {
        axios({
          method: 'post',
          url: '/api/tasks/',
          data: {
            title: this.title,
            description: this.description
          }
        }).then(response => {
          this.message = response.data.task
          this.modal
        })
      }
    }
  }
</script>
