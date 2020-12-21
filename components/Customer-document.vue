<template>
  <div>
    <div class="customer-doc">
      <div class="customer-doc__wrap" v-for="(item, index) of documentCustomer" :key="index.id">
        <div class="customer-doc__item" v-if="item.status == 'Pending' || item.status == 'PriceAdded'">
          <div class="customer-doc__title">
            <b>Hujjat nomi:</b> {{item.title}}
          </div>
          <div class="customer-doc__text">
            <b>Hujjat haqida qisqacha malumot:</b> {{item.text}}
          </div>
          <div class="customer-doc__link">
            <a :href="item.doc_file" target="_blank">hujjatni yuklab olish</a> 
          </div>
          <div class="customer-doc__price" v-if="item.price > 0 || item.status == 'PriceAdded'">
            <font-awesome-icon :icon="['fas', 'money-bill-alt']" class="customer-doc__icon" />
            <b>Savol qo'yilgan narx:</b>  {{item.price}} <br>
            <b><span>pull to'lash uchun iltimos "Bildirishnomalar" ga o'ting</span></b>
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
      <div v-if="documentCustomer.length < 0">Sizda puli to'lanmagan hujjat yo'q</div>
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