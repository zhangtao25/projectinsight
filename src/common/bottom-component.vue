<template>
  <div class="bottom-component" style="width: 1100px;height: 720px">
    <p class="contact" style="font-size: 40px;text-align: right"><img src="./../assets/tu1.png" alt="">CONTACT US</p>
    <div class="question" style="height: 400px;margin-top: 75px;position: relative">
      <div style="position: absolute;left: 100px;z-index: 100">
        <P style="font-size: 22px">What is troubling you in China ?</P>
        <ul style="font-size: 22px;list-style: disc;margin-top: 45px;background-color: rgba(255,255,255,0.3)">
          <li><a href="">How to rent an apartment?</a></li>
          <li><a href="">How to get a metro card?</a></li>
          <li><a href="">How to use shared bikes?</a></li>
          <li><a href="">Trouble with VPN?</a></li>
          <li><a href="">Best custolmised data package?</a></li>
          <li><a href="">Best place to grab a bite?</a></li>
        </ul>
      </div>
      <img style="position: absolute;left: 550px" src="./../assets/bottom.png" alt="">
    </div>

    <div style="height: 100px">
      <div style="font-size: 32px;width: 300px;float: left;transform: translateY(50px)">
        <p class="coming">Coming soon...</p>
        <img style="transform: translateY(-20px)" src="./../assets/tu4.png" alt="">
      </div>
      <p class="join" style="font-size: 40px;width: 300px;float: right"><img src="./../assets/tu3.png" alt="">JOIN US</p>
    </div>
  </div>
</template>
<style>
  .bottom-component>.question>div>ul{box-shadow: 0px 0px 25px #666;padding: 68px 95px 40px 95px;}
  .contact:hover{cursor: pointer}
  .join:hover{cursor: pointer}
  .coming:hover{cursor: pointer}
</style>
