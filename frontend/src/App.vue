<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{name: 'Home', params: tasks}">Home</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings_ethernet</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{name: 'Pending', params: tasks}">Pending</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>trending_flat</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{name: 'Ongoing', params: tasks}">Ongoing</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>done</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{name: 'Completed', params: tasks}">Completed</router-link></v-list-tile-title>
          </v-list-tile-content>          
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{name: 'Test', params: tasks}">TEST</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-btn
            fab
            medium
            color="cyan accent-2"
            bottom
            right
            absolute
            @click.native.stop="dialog = !dialog"
          >
            <v-icon>add</v-icon>
          </v-btn>
      <v-toolbar-title>ToDo List</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout
            justify-center
          >
          {{tasks}}
          <!-- ROUTER VIEW BEGIN -->
            <router-view></router-view>
            <!-- ROUTER VIEW END -->
              <new-todo 
              :dialog="dialog"
              @newTodoClose="newTodoClose"></new-todo>
          </v-layout>
        </v-container>        
      </v-content>
    </main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; Tim Dodge 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import NewTodo from './components/NewTodo'
  export default {
    components: {
      NewTodo
    },
    data: () => ({
      drawer: true,
      dialog: false,
      tasks: []
    }),
    props: {
      source: String
    },
    mounted () {
      this.getTasks()
    },
    methods: {
      newTodoClose: function (dialog) {
        this.dialog = false
      },
      // getTasks captures all current tasks, which can then be passed through route parameters. TODO THIS IS NOT CURRENTLY WORKING. NEED VUEX
      getTasks: function () {
        axios.get('/api/tasks/').then(response => {
          this.tasks = response.data
        })
      }
    }
  }
</script>

<style>

</style>
