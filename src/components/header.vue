<template>
  <div class="header">
    <a class="go-menu"><i class="iconfont icon-menu"></i></a>
    <div class="title">
      <p>卖座电影</p><a class="go-city">广州<i class="icon iconfont icon-bottom"></i></a>
    </div>
    <a class="go-mine"><i class="icon iconfont icon-people"></i></a>
  </div>
</template>

<script>
  export default {
    name: 'header',
    props: {
      com: {
        type: Object
      }
    },
    
  }
</script>

<style>
  @import "../assets/icon/iconfont.css";
  @import "../assets/header.css";
</style>
