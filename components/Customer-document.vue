<template>
  <div>
    <div class="customer-doc">
      <div class="customer-doc__wrap" v-for="(item, index) of documentCustomer" :key="index.id">
        <div class="customer-doc__item" v-if="item.status == 'Pending' || item.status == 'PriceAdded'">
          <div class="customer-doc__title">
            <nuxt-link :to="'customer-document/' + item.id">Hujjat nomi:</nuxt-link>
            <p>{{item.title}}</p>
          </div>
          <div class="customer-doc__text">
            <span>Hujjat haqida qisqacha malumot:</span>
            <p>{{item.text}}</p>
          </div>
          <div class="customer-doc__link">
            <a :href="item.doc_file" target="_blank">hujjatni yuklab olish</a> 
          </div>
          <div class="price" v-if="item.price > 0 || item.status == 'PriceAdded'">
            <font-awesome-icon :icon="['fas', 'money-bill-alt']" />
            Savol qo'yilgan narx: {{item.price}} <br>
            pull to'lash uchun iltimos "Bildirishnomalar" ga o'ting
          </div>          
          <div v-if="item.price == null">Savolga naxr qo'yilmagan. Iltimos yarist savolga narx qo'yishini kuting</div>
        </div>
      </div>
      <div v-if="documentCustomer.length == 0">
        Siz hujjat buyurtma qilmagansiz
        <br>
        <div class="customer-doc__link">
          <nuxt-link :to="localePath('/order-documents')" class="customer-doc__link">Hujjat buyurtma qilish</nuxt-link>
        </div>
      </div>
      <div v-if="documentCustomer.length > 0">Sizda puli to'lanmagan hujjat yo'q</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      documentCustomer: []
    }
  },
  methods: {
    async getDocumentCustomer() {
      await this.$axios.get('document/customer/')
        .then((res) => {
          this.documentCustomer = res.data;
          console.log('getDocumentCustomer', res)
        })
    },
  },
  mounted() {
    this.getDocumentCustomer()
  }
}
</script>
<style scoped>

</style>