<template>
  <div>
    <div class="customer-priceDocPrice">
      <div class="customer-priceDocPrice__wrap" v-for="item in customerDocPriceDone" :key="item.id">
        <div v-if="item.status == 'DocumentCompleted' || item.status == 'PaymentDone'">
          <div class="customer-priceDocPrice__title">{{item.title}}</div>
          <div class="customer-priceDocPrice__text">{{item.text}}</div>
          <div class="customer-priceDocPrice__doc">
            <a :href="item.doc_file">Hujjatni yuklab olish</a>
          </div>
          <div class="customer-priceDocPrice__price">Hujjatni narxi: {{item.price}}</div>
          <div class="customer-priceDocPrice__link">
            <nuxt-link :to="'customer-document/' + item.id">Javobni kurish</nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="customerDocPriceDone.length == 0">Sizda javobi kelgan hujjatlar yo'q</div>
      <nuxt-link :to="localePath('/order-documents')">Hujjat buyurtma qilish</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customerDocPriceDone: []
    }
  },
  methods: {
    async getCustomerDocPriceDone() {
      await this.$axios.get('document/customer/')
        .then((res) => {
          this.customerDocPriceDone = res.data;
          console.log('getCustomerDocPriceDone', res)
        })
    },
  },
  mounted() {
    this.getCustomerDocPriceDone()
  } 
}
</script>