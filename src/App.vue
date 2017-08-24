<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <v-end></v-end>
  </div>
</template>

<script>
  import Header from './components/header.vue';
  import End from './components/end.vue';
  
  export default {
    name: 'app',
    components: {
      'v-header': Header,
      'v-end': End
    }
  }
</script>

<style type="text/css">
  @import "./assets/reset.css";
</style>
