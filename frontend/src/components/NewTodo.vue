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
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = !dialog; modal()">Sumbit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    props: ['dialog'],
    data () {
      return {
        valid: false,
        title: '',
        titleRules: [
          (v) => !!v || 'Title is required',
          (v) => v.length <= 10 || 'Title must be less than 10 characters'
        ],
        description: '',
        descriptionRules: [
          (v) => !!v || 'E-mail is required'
        ]
      }
    },
    methods: {
      modal: function () {
        this.$emit('newTodoClose', this.dialog)
      }
    }
  }
</script>
