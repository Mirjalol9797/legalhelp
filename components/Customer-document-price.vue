<template>
  <div>
    <div class="user__priceDocument">
      <div class="user__priceDocument-title">Pulli hujjatlarim</div>
      <div class="user__priceDocument-info" v-for="item of priceAddedDocument" :key="item.id">
        <div class="user__priceDocument-name"><b>Hujjat nomi:</b> {{item.title}}</div>
        <div class="user__priceDocument-price" v-if="item.price > 0">
          <b>Hujjatga quyilgan narx:</b> {{item.price}} so'm
          <nuxt-link :to="'customer-document-price/' + item.id" class="user__priceDocument-pay">Savolga pull to'lash</nuxt-link>
        </div>
        <div class="user__priceDocument-about">
          Pull to'langanidan so'ng yurist javob berishini kuting. <br>
          puli to'langan savollar va ularga keladigon javoblar <b>"Javobi kelgan hujjatlarim"</b> ro'yxatidan qidiring
        </div>
      </div>
      <div v-if="priceAddedDocument.length == 0">Sizda puli to'lanishi kerak bo'lgan hujjatlar yo'q</div>
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
          console.log('getDocumentCustomerPriceAdded', res)
        })
    },
  },
  mounted() {
    this.getDocumentCustomerPriceAdded()
  }
}
</script>