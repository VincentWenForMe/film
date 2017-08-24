<template>
  <div class="detail">
    <h1><img :src="detail.cover.origin" width="100%" alt=""></h1>
    <div class="film-short">
      <p>导&emsp;&emsp;演：{{detail.director}}</p>
      <p>
        主&emsp;&emsp;演：<span v-for="item in detail.actors">
        {{item.name}} |
      </span>
      </p>
      <p>地区语言：{{detail.nation}}{{detail.language}}</p>
      <p>类&emsp;&emsp;型：{{detail.category}}</p>
      <p>上映时间：{{detail.premiereAt|formatDate}}</p>
      <p>{{detail.synopsis}}</p>
    </div>
    <div class="booking-now">
      <a href="">立即购票</a>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'detail',
    data(){
      return {
      }
    },
    created() {
      let id = this.$route.params.id;
      this.$store.dispatch('getFilmDetail', id);
    },
    computed: mapGetters({
      detail: 'getFilmDetail'
    }),
    filters: {
      formatDate: function (time) {
        let date = new Date(time * 1),
          month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
          day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        
        return `${month}月${day}日上映`
      }
    }
  }
</script>

<style>
  @import "../assets/detail.css";
</style>
