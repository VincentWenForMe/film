<template>
  <div class="film">
    <div class="film-tab">
      <div :class="type=='now-playing'?'active': ''" class="item"><a @click="changeTab('now-playing')">正在热映</a></div>
      <div :class="type=='coming-soon'?'active': ''" class="item"><a @click="changeTab('coming-soon')">即将上映</a></div>
    </div>
    <div class="tab-content">
      <div class="coming-soon" v-if="type=='coming-soon'">
        <ul>
          <li v-for="item in comingSoonList">
            <div class="poster">
              <router-link :to="{name: 'detail', params:{id: item.id}}"><img src="" :src="item.poster.origin" alt="">
              </router-link>
            
            </div>
            <div class="relate-info">
              <p class="p-1">{{item.name}}</p>
              <p class="p-2">{{item.intro}}</p>
              <p class="p-3">{{item.premiereAt|formatData}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="now-playing" v-if="type=='now-playing'">
        <ul>
          <li v-for="item in nowPlayingList">
            <div class="poster">
              <router-link :to="{name: 'detail', params:{id: item.id}}"><img src="" :src="item.poster.origin" alt="">
              </router-link>
            </div>
            <div class="relate-info">
              <p class="p-1">{{item.name}}</p>
              <p class="p-2">{{item.intro}}</p>
              <p class="p-3">{{item.premiereAt|formatData}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'film',
    data() {
      return {
        type: ''
      }
    },
    created() {
      this.type = this.$route.params.type;
      console.log(this.type);
      if (this.type === 'now-playing' && this.nowPlayingList.length === 0) {
        this.$store.dispatch('getNowPlayingList')
      } else if (this.type === 'coming-soon' && this.comingSoonList.length === 0) {
        this.$store.dispatch('getComingList')
      }
    },
    computed: mapGetters({
      comingSoonList: 'getComingList',
      nowPlayingList: 'getNowPlayingList'
    }),
    methods: {
      changeTab(type) {
        this.type = type;
        this.$router.replace({ params: { type: type } });
        if (this.type === 'now-playing' && this.nowPlayingList.length === 0) {
          this.$store.dispatch('getNowPlayingList')
        } else if (this.type === 'coming-soon' && this.comingSoonList.length === 0) {
          this.$store.dispatch('getComingList')
        }
      }
    },
    filters: {
      formatData: (time) => {
        let date = new Date(time),
          month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
          day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
          week = date.getDay();
        let arr = ['日', '一', '二', '三', '四', '五', '六'];
        
        return `${month}月${day}日上映 星期${arr[week]}`;
      }
    }
  }
</script>

<style>
  @import "../assets/film.css";
</style>
