<template>
  <div class="plate">
    <div class="SerialNumber" style="font-size: 60px">{{plateDatas.SerialNumber}}</div>
    <p class="title" style="font-size: 40px">{{plateDatas.title}}</p>
    <ul style="list-style: disc">
      <li v-for="(content,index) of plateDatas.contents" :key="index" style="font-size: 22px">{{content}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        // plateDatas:{
        //   SerialNumber:1,
        //   title:'APARTMENTS',
        //   contents:[
        //     'Location'
        //   ]
        // }
      }
    },
    props:['plateDatas']
  }
</script>
