<template>
  <div>
    <div class="customer-priceDone">
      <div class="customer-priceDone__wrap" v-for="(item, index) in customerQuesPriceDone" :key="index.id">
        <div class="customer-priceDone__item" v-if="item.status == 'PaymentDone' || item.status == 'QuestionCompleted'">
          <div class="customer-priceDone__title">{{item.title}}</div>
          <div class="customer-priceDone__text">{{item.text}}</div>
          <div class="customer-priceDone__date">Javob kelgan sana: {{item.date}}</div>
          <div class="customer-priceDone__price">Savolga quyilgan narx: {{item.price}}</div>
          <nuxt-link :to="'customer-question/' + item.id" class="customer-priceDone__link">
            Javobni ko'rish
          </nuxt-link>
        </div>
      </div>
      <div v-if="customerQuesPriceDone.length == 0">
        Sizda puli to'lanishi kerak bo'lgan savollar yo'q <br>
        <nuxt-link :to="localePath('/askquestions')">Savol so'rash</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customerQuesPriceDone: []
    }
  },
  methods: {
    async getCustomerQuesPriceDone() {
      await this.$axios.get('question/customer/')
        .then((res) => {
          this.customerQuesPriceDone = res.data;
          console.log('getCustomerQuesPriceDone', res)
        })
    }  
  },
  mounted() {
    this.getCustomerQuesPriceDone()
  }  
}
</script>