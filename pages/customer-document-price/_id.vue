<template>
  <div>
    <b-container class="customer-payment">
      <form @submit.prevent="payment" class="customer-form" :class="{customerNoactive: isActive}">
        <div class="customer-form__item">
          <label for="card">Karta raqam</label>
          <div>
            <input 
              type="number" 
              id="card"
              placeholder="8600012345678901"
              v-model="form.card_number"
            >
            <div v-if="form.card_number > 9999999999999999">karta raqam notug'ri terilgan</div>
          </div>
        </div>
        <div class="customer-form__item">
          <label for="data">Amal qilish muddati</label>
          <div>
            <input 
              type="number" 
              id="data"
              placeholder="1220"
              v-model="form.expire_date"
            >
            <div v-if="form.expire_date > 1230">kun notug'ri kiritilgan</div>
          </div>
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
        <b-alert show variant="danger" v-if="error" class="customer-form__error">
          {{error}} <br>
        </b-alert>
      </form>
      <form @submit.prevent="payment2" class="customer-pay-form" :class="{customerActive: isActive}">
        <div class="customer-pay-form__item">
          <label for="">sms code</label>
          <input type="text" v-model="form2.code">
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
        <b-alert show variant="danger" v-if="error" class="customer-form__error">
          {{error}} <br>
        </b-alert>        
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
        object_type: 'document',
        object_id: ''
      },
      form2: {
        code: '',
        card_token: '',
        object_type: 'document',
        object_id: ''
      },
      isActive: false,
      error: ''
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
      // this.isActive = true;
      await this.$axios.post('payment/clickcardtoken/', this.form)
      .then((res) => {
        console.log('payment', res)
        this.form2.card_token = res.data.response.card_token;
        console.log('dasdsad', this.form2)
        if(this.error === false) {
          this.isActive = false;
        } else {
          this.isActive = true
        }
      })
      .catch((err) => {
          this.error = err.response.data.response.error_note
          // console.log('qqweqwe', err.response.data.response.error_note)
      });      
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
        catch {
          this.$toast.error({
            title: `${this.$t("To'lov amalga oshirilmadi")}`,
            message: `${this.$t("")}`
          });
        }
      })
      .catch((err) => {
        this.error = err.response.data.response.error_note
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