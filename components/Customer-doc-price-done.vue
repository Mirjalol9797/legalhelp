<template>
  <div>
    <div class="customer-priceDocPrice">
      <div class="customer-priceDocPrice__wrap" v-for="item in customerDocPriceDone" :key="item.id">
        <div v-if="item.status == 'DocumentCompleted' || item.status == 'PaymentDone'">
          <div class="customer-priceDocPrice__item">
            <div class="customer-priceDocPrice__title"><b>Hujjat nomi:</b> {{item.title}}</div>
            <div class="customer-priceDocPrice__text"><b>Hujjat matni:</b> {{item.text}}</div>
            <div class="customer-priceDocPrice__doc">
              <a :href="$store.state.mediaURL + item.doc_file" target="_blank">Hujjatni yuklab olish</a>
            </div>
            <div class="customer-priceDocPrice__price"><b>Hujjat narxi:</b> {{item.price}}</div>
            <div class="customer-priceDocPrice__link">
              <nuxt-link :to="'customer-document/' + item.id">Javobni ko'rish</nuxt-link>
            </div>
          </div>  
        </div>
      </div>
      <div v-if="customerDocPriceDone.length == 0" class="customer-priceDocPrice__link">
        Sizda javobi kelgan hujjatlar yo'q <br>
        <nuxt-link :to="localePath('/order-documents')">Hujjat buyurtma qilish</nuxt-link>
      </div>      
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