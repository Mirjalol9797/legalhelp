<template>
  <div class="loader">
    <!-- <b-spinner label="Loading..."></b-spinner> -->
    <img src="../assets/images/loader.gif" alt="">
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
    top: 45%;
    left: 0;
    right: 0;
    text-align: center;
    margin: auto;
  }
</style>