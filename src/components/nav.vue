<template>
  <div id="nav">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        speed:500,
        // spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }
</script>

<style>
  /*↓*/
  .swiper-slide:nth-child(1){background-image: url("./../assets/bg.png");background-size: cover}
  .swiper-slide:nth-child(2){background-image: url("./../assets/201702151453082348.jpg");background-size: cover}
  .swiper-slide:nth-child(3){background-image: url("./../assets/201703011020173137.jpg");background-size: cover}

  /*↑*/
   html, body {
     position: relative;
     height: 100%;
   }
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
