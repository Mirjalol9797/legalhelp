<template>
  <div class="loader">
    <!-- <b-spinner label="Loading..."></b-spinner> -->
    <!-- <img src="../assets/images/loader.gif" alt=""> -->
    
    <div class="lds-ellipsis">
      <div class="lds-ellipsis__item">
        <div>
          <img src="../assets/image/loading/1.png" alt="">
        </div>
        <div>
          <img src="../assets/image/loading/1.png" alt="">
        </div>
        <div>
          <img src="../assets/image/loading/1.png" alt="">
        </div>
        <div>
          <img src="../assets/image/loading/1.png" alt="">
        </div>
      </div>
      <div class="lds-ellipsis__img">
        <img src="../assets/image/loading/logo.png" alt="">
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading'
}
</script>
<style scoped>
  .loader {
    background: #fff;
    width: 100%;
    height: 100vh;
    margin: auto;
    z-index: 9;
    position: relative;
  }
  .spinner-border {
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 45%;
    width: 40px;
    height: 40px;
  }
  img {
    width: 100px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    margin: auto;
    transform: translateY(-50%);
  }
.lds-ellipsis {
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.lds-ellipsis__item {
  position: absolute;
  top: -80px;
  left: 9px;
}
.lds-ellipsis__item div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis__item div img {
  width: 15px;
}
.lds-ellipsis__item div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis__item div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis__item div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis__item div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
 
</style>