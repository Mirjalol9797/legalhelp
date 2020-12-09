<template>
  <div>
    <div class="user__priceDocument">
      <div class="user__priceDocument-title">Pulli hujjatlarim</div>
      <b-row class="user__priceDocument-info" v-for="item of priceAddedDocument" :key="item.id">
        <b-col sm="8" class="user__priceDocument-name">{{item.title}}</b-col>
        <b-col sm="4" class="user__priceDocument-price">
          {{item.price}} so'm
          <nuxt-link :to="'customer-document-price/' + item.id" class="user__priceDocument-pay">To'lash</nuxt-link>
        </b-col>
      </b-row>
    </div>          
  </div>
</template>
<script>
export default {
  data() {
    return {
      priceAddedDocument: []
    }
  },
  methods: {
    async getDocumentCustomerPriceAdded() {
      await this.$axios.get('document/customer/?priceadded=1')
        .then((res) => {
          this.priceAddedDocument = res.data;
          // console.log('getDocumentCustomerPriceAdded', res)
        })
    },
  },
  mounted() {
    this.getDocumentCustomerPriceAdded()
  }
}
</script>