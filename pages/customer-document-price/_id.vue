<template>
  <div>
    <b-container class="customer-payment" v-if="loader">
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
        <button type="submit">SMS kod olish</button>
        <b-alert show variant="danger" v-if="error" class="customer-form__error">
          {{error}} <br>
          Повторите пожалуйста занова
        </b-alert>
      </form>
      <form @submit.prevent="payment2" class="customer-pay-form" :class="{customerActive: isActive}">
        <div class="customer-pay-form__item">
          <label for="">sms code</label>
          <input type="number" v-model="form2.code">
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
        <b-alert show variant="danger" v-if="error2" class="customer-form__error">
          {{error2}} <br>
        </b-alert>    
        <div class="customer-form__link">
          <nuxt-link :to="localePath('/customer-profile')">Saxifamga qaytish</nuxt-link>
          <nuxt-link :to="localePath('/')">Asosiy saxifaga o'tish</nuxt-link>
        </div>    
      </form>
    </b-container>
    <div v-else>
      <loading /> 
    </div>     
  </div>
</template>
<script>
export default {
  data() {
    return {
      loader: true,
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
      error: '',
      error2: ''
    }
  },
  methods: {
    async payment() {
      this.form.object_id = this.$route.params.id;
      // this.isActive = true;
      this.loader = false;
      await this.$axios.post('payment/clickcardtoken/', this.form)
      .then((res) => {
        this.loader = true;
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
          this.error = err.response.data.response.error_note;
          this.loader = true;
          this.form.card_number = "";
          this.form.expire_date = "";
          // console.log('qqweqwe', err.response.data.response.error_note)
      });      
    },
    async payment2() {
      this.form2.object_id = this.$route.params.id;
      this.isActive = true;
      this.loader = false;
      await this.$axios.post('payment/clickcardtokenverify/', this.form2)
      .then(async () => {
        this.loader = true;
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
        this.error2 = err.response.data.response.error_note;
        this.loader = true;
        this.form2.code = '';
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