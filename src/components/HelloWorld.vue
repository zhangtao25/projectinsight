<template>
  <div id="home" class="margin">
    <plate :plate-datas="plateDatas1"></plate>
    <plate :plate-datas="plateDatas2"></plate>
    <plate :plate-datas="plateDatas3"></plate>
    <plate :plate-datas="plateDatas4"></plate>
  </div>
</template>

<script>
  import plate from './../common/plate'
export default {
  name: 'HelloWorld',
  components:{
    plate
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      plateDatas1:{
        SerialNumber:1,
        title:'APARTMENTS',
        contents:[
          'Location'
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
        title:'TRANSPORTATION&COMMUNICATION',
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
