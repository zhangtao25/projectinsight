<style>
  /*.SerialNumber{border: 1px solid cadetblue}*/

  .pubPlate{position: relative;}
  .pubPlate>img{position: absolute;}
  .pubPlate>.plate{position: absolute;}
  .pubPlate>.plate>.SerialNumber{background-image: url("./../assets/numberPictures.png");margin-bottom: 40px}



  .plate1{width: 638px;height: 586px}
  .plate1>img{left: 59px;top: 96px;}
  .plate1>.ce{left: 0px;top: -80px}
  .plate1>.plate{left: 335px;background-color: white;padding: 0 0 30px 30px}
  .plate1>.plate>.SerialNumber{}
  .plate1>.plate>ul>li{width: 120px;}

  .plate2{width: 454px;height: 290px}
  .plate2>img{top: 112px;}
  .plate2>.plate{left: 166px;background-color: white}
  .plate2>.plate>.SerialNumber{transform: translateX(160px)}
  .plate2>.plate>.title{transform: translateX(45px)}
  .plate2>.plate>ul{width: 200px}
  .plate2>.plate>ul>li:nth-child(1){transform: translateX(155px)}
  .plate2>.plate>ul>li:nth-child(2){transform: translateX(50px)}

  #home{padding: 0 50px 0 50px;position: relative;height: 1350px;width: 1200px;}
  .plate1{position: absolute;top: 0;left: 0}
  .plate2{position: absolute;top: 0px;left: 718px}
  .plate3{position: absolute;top: 218px;left: 600px}
  .plate4{position: absolute;top: 500px;z-index: 100}
  .bottom-component{position: absolute;top: 650px}
  .black-block1{position: absolute;width: 35px;height: 10px;background-color: black;left: 505px;top: 202px}
  .black-block2{position: absolute;width: 35px;height: 10px;background-color: black;left: 926px;top: 532px}
  .black-block3{position: absolute;width: 35px;height: 10px;background-color: black;left: 100px;top: 802px}

  .plate3{width: 470px;height: 370px}
  /*.plate3>img{left: 59px;top: 96px;}*/
  /*.plate3>.plate{left: 335px;background-color: white}*/
  .plate3>.plate>.title{width: 413px}
  /*.plate3>.plate>.SerialNumber{}*/
  .plate3>.plate>ul{transform: translateX(25px)}


  .plate4{width: 450px;height: 180px}
  /*.plate3>img{left: 59px;top: 96px;}*/
  /*.plate3>.plate{left: 335px;background-color: white}*/
  /*.plate4>.plate>.title{width: 413px}*/
  /*.plate3>.plate>.SerialNumber{}*/
  .plate4>.plate>ul{transform: translateX(30px)}



  .plate1 .SerialNumber{width:52px;height:71px;}
  .plate2 .SerialNumber{width:60px;height:71px;background-position-x: -64px;}
  .plate3 .SerialNumber{width:60px;height:71px;background-position-x: -134px;}
  .plate4 .SerialNumber{width:78px;height:71px;background-position-x: -206px;}

</style>
<template>
  <div id="home" class="margin">
    <div class="plate1 pubPlate">
      <img src="./../assets/plateDatas1.png" alt="">
      <img class="ce" src="./../assets/ce.png" alt="">
      <plate :plate-datas="plateDatas1"></plate>
    </div>

    <div class="plate2 pubPlate">
      <img src="./../assets/plateDatas2.png" alt="">
      <plate :plate-datas="plateDatas2"></plate>
    </div>
    <div class="plate3 pubPlate">
      <plate :plate-datas="plateDatas3"></plate>
    </div>
    <div class="plate4 pubPlate">
      <plate :plate-datas="plateDatas4"></plate>
    </div>
    <bottom-component></bottom-component>

    <div class="black-block1"></div>
    <div class="black-block2"></div>
    <div class="black-block3"></div>
  </div>
</template>

<script>
  import plate from './../common/plate'
  import bottomComponent from './../common/bottom-component'
export default {
  name: 'HelloWorld',
  components:{
    plate,
    'bottom-component':bottomComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      plateDatas1:{
        SerialNumber:1,
        title:'APARTMENTS',
        contents:[
          'Location and fees'
        ]
      },
      plateDatas2:{
        SerialNumber:2,
        title:'FINANCE',
        contents:[
          'Alipay',
          'Adding a debit card on we chat'
        ]
      },
      plateDatas3:{
        SerialNumber:3,
        title:'TRANSPORTATION & COMMUNICATION',
        contents:[
          'Phone number&data package',
          'Metro pass,metro app',
          'VPN membership',
          'Renting shared bikes'
        ]
      },
      plateDatas4:{
        SerialNumber:4,
        title:'ENTERTAINMENT',
        contents:[
          'Foodie Map',
          'Apps U need'
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
