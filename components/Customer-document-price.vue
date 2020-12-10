<template>
  <div>
    <div class="user__priceDocument">
      <div class="user__priceDocument-title">Pulli hujjatlarim</div>
      <div class="user__priceDocument-info" v-for="item of priceAddedDocument" :key="item.id">
        <div class="user__priceDocument-name">Hujjat nomi: {{item.title}}</div>
        <div class="user__priceDocument-price" v-if="item.price > 0">
          Hujjatga quyilgan narx: {{item.price}} so'm
          <nuxt-link :to="'customer-document-price/' + item.id" class="user__priceDocument-pay">Savolga pull to'lash</nuxt-link>
        </div>
      </div>
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