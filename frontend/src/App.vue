<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    }
  }
</script>

<style>

</style>
