<template>
  <div>
    <b-container class="lawyer-wait">
      <b-alert show variant="success">
        Siz yurist (freelancer) sifatida ro'yxatga olindingiz. Admin tomonidan ma'lumotlaringiz tasdiqlangandan so'ng xizmat ko'rsatishingiz mumkin.
      </b-alert>
    </b-container>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .lawyer-wait {
    padding: 50px 0;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .alert-success {
    text-align: center;
    width: 100%;
  }
</style>