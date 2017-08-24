<template>
  <div class="cinema">
    cinema
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'cinema',
    created() {
      this.$store.dispatch('getNowPlayingList');
    },
    computed: mapGetters({
      nowPlayingList: 'getNowPlayingList'
    })
  }
</script>

<style>

</style>
