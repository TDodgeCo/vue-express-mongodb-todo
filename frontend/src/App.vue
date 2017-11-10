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
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-btn
            fab
            small
            color="cyan accent-2"
            bottom
            right
            absolute
            @click.native.stop="dialog = !dialog"
          >
            <v-icon>add</v-icon>
          </v-btn>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout
            justify-center
          >
            <router-view></router-view>
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
  import NewTodo from './components/NewTodo'
  export default {
    components: {
      NewTodo
    },
    data: () => ({
      drawer: true,
      dialog: false
    }),
    props: {
      source: String
    },
    methods: {
      newTodoClose: function (dialog) {
        this.dialog = false
      }
    }
  }
</script>

<style>

</style>
