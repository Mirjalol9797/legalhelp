<template>
  <div>
    <b-container class="customer-payment">
      <form @submit.prevent="payment">
        <div>
          <label for="">Karta raqam</label>
          <input 
            type="text" 
            placeholder="8600012345678901"
            v-model="form.card_number"
          >
        </div>
        <div>
          <label for="">data</label>
          <input 
            type="text" 
            placeholder="1220"
            v-model="form.expire_date"
          >
        </div>        
        <div>
          <label for="">sms code</label>
          <input 
            type="text" 
            placeholder="sms code"
            v-model="form.code"
          >
        </div>  
        <div>
          <label for="">savol tipi</label>
          <input 
            type="hiiden" 
            v-model="form.object_type"
          >
        </div>
        <div>
          <label for="">savol id</label>
          <input 
            type="hiiden" 
            v-model="form.object_id"
          >
        </div>                 
        <button type="submit">To'lash</button>
      </form>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        card_number: '',
        expire_date: '',
        object_type: 'question',
        object_id: ''
      }
    }
  },
  methods: {
    async payment() {
      await this.$axios.post('payment/clickcardtoken/', this.form) 
        .then((res) => {
          console.log('payment', res)
        })
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
  .customer-payment {
    padding: 50px 0;
  }
</style>