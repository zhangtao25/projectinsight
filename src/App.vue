<template>
  <div id="app">
    <div id="bg" class="margin"></div>
    <div id="nav" class="margin">
      <ul>
        <li><a href="">HOME</a></li>
        <li><a href="">ABOUT</a></li>
        <li><a href="">PROGRAM</a></li>
        <li><a href="">CONTACT</a></li>
      </ul>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .margin{width: 1200px;margin: 0 auto}
  #app #bg{height:631px;background-image: url("./assets/bg.png")}
  #app #nav{}
  #app #nav ul{height: 60px;margin-left: 500px}
  #app #nav ul li{float: left}
  #app #nav ul li a{font-size: 22px;margin-right: 80px;line-height: 60px;color: #5f5e7e}
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
</style>
