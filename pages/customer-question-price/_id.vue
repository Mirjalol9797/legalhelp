<template>
  <div>
    <b-container class="customer-payment">
      <form @submit.prevent="payment" class="customer-form" :class="{customerNoactive: isActive}">
        <div class="customer-form__item">
          <label for="card">Karta raqam</label>
          <input 
            type="text" 
            id="card"
            placeholder="8600012345678901"
            v-model="form.card_number"
            required
          >
        </div>
        <div class="customer-form__item">
          <label for="data">Amal qilish muddati</label>
          <input 
            type="text" 
            id="data"
            placeholder="1220"
            v-model="form.expire_date"
            required
          >
        </div>        
        <div class="customer-form__item" style="display: none">
          <label for="">savol tipi</label>
          <input 
            type="hiiden" 
            v-model="form.object_type"
          >
        </div>
        <div class="customer-form__item" style="display: none">
          <label for="">savol id</label>
          <input 
            type="hiiden" 
            v-model="form.object_id"
          >
        </div>  
        <!-- <div v-if="showCode">
          <label for="">sms code</label>
          <input 
            type="text" 
            placeholder="sms code"
            v-model="code"
          >
        </div>                          -->
        <button type="submit">SMS kod olish</button>
      </form>
      
      <form @submit.prevent="payment2" class="customer-pay-form" :class="{customerActive: isActive}">
        <div class="customer-pay-form__item">
          <label for="">sms code</label>
          <input type="text" v-model="form2.code" required>
        </div>
        <div class="customer-pay-form__item" style="display: none">
          <label for="">sms code</label>
          <input type="text" v-model="form2.card_token">
        </div>        
        <div class="customer-pay-form__item" style="display: none">
          <label for="">savol tipi</label>
          <input 
            type="hiiden" 
            v-model="form2.object_type"
          >
        </div>
        <div class="customer-pay-form__item" style="display: none">
          <label for="">savol id</label>
          <input 
            type="hiiden" 
            v-model="form2.object_id"
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
      },
      form2: {
        code: '',
        card_token: '',
        object_type: 'question',
        object_id: ''
      },
      isActive: false
        
    }
  },
  methods: {
    // async payment() {
    //   this.form.object_id = this.$route.params.id
    //   await this.$axios.post('payment/clickcardtoken/', this.form) 
    //     .then((res) => {
    //       console.log('payment', res)
    //       this.$axios.post('payment/clickcardtokenverify/', {token: res.data.card_token, code: this.code})
    //       .then(
    //         console.log('clickcardtokenverify', res)
    //       )
    //       .catch()
    //     })
    // }

    async payment() {
      this.form.object_id = this.$route.params.id;
      this.isActive = true;
      await this.$axios.post('payment/clickcardtoken/', this.form)
      .then((res) => {
        console.log('payment', res)
        this.form2.card_token = res.data.response.card_token;
        console.log('dasdsad', this.form2)
      })
    },
    async payment2() {
      this.form2.object_id = this.$route.params.id;
      this.isActive = true;
      await this.$axios.post('payment/clickcardtokenverify/', this.form2)
      .then(async () => {
        try {
          this.$toast.success({
            title: `${this.$t("To'lov amalga oshirilda")}`,
            message: `${this.$t("")}`
          });
        }
        catch(error) {
          console.log('ERROR', error)
          this.$toast.error({
            title: `${this.$t("To'lov amalga oshirilmadi")}`,
            message: `${this.$t("")}`
          });
        }
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