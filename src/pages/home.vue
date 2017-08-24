<template>
  <div class="home">
    <swiper class="banner-swiper">
      <swiper-slide class="slide" v-for="item in banner" :key="item.url">
        <a href="" :href="item.url" target="_blank"><img src="" :src="item.imageUrl" width="100%" alt=""></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="now-play">
      <ul>
        <li v-for="item in nowplay">
          <div class="img">
            <router-link :to="{name: 'detail', params: {id: item.id}}">
              <img src="" :src="item.cover.origin" width="100%" alt="">
            </router-link>
          </div>
          <div class="intro">
            <div class="info">
              <h1>{{item.name}}</h1>
              <p>{{item.intro}}</p>
            </div>
            <div class="grade">{{item.grade}}</div>
          </div>
        </li>
      </ul>
      <div class="more-film">
        <router-link :to="{name:'film', params: {type: 'now-playing'}}">更多热映电影</router-link>
      </div>
    </div>
    <div class="coming-title">
      <div class="ct-1"></div>
      <div class="ct-2">即将上映</div>
      <div class="ct-3"></div>
    </div>
    <div class="coming">
      <ul>
        <li v-for="item in coming">
          <div class="img">
            <router-link :to="{name: 'detail', params: {id: item.id}}"><img src="" :src="item.cover.origin" width="100%" alt=""></router-link>
          </div>
          <div class="intro">
            <div class="info">
              <h1>{{item.name}}</h1>
              <p>{{item.intro}}</p>
            </div>
            <div class="grade">{{item.premiereAt|formatDate}}</div>
          </div>
        </li>
      </ul>
      <div class="more-film">
        <router-link :to="{name:'film', params: {type: 'coming-soon'}}">更多即将上映电影</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  require('swiper/dist/css/swiper.css');
  import { mapGetters } from 'vuex';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  
  export default {
    data() {
      return {}
    },
    created() {
      this.$store.commit('COM_CONF', {
        title: '卖座电影'
      });
      
      if (this.banner.length === 0) {
        this.$store.dispatch('getBannerList')
      }
      
      if (this.nowplay.length === 0) {
        this.$store.dispatch('getNowPlaying');
      }
      
      if (this.coming.length === 0) {
        this.$store.dispatch('getComing');
      }
      
    },
    computed: mapGetters({
      banner: 'getBannerList',
      nowplay: 'getNowPlaying',
      coming: 'getComing'
    }),
    filters: {
      formatDate: function (time) {
        let date = new Date(time * 1),
          month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
          day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        
        return `${month}月${day}日上映`
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }

</script>
<style>
  @import "../assets/home.css";
</style>
