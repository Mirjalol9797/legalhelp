<template>
  <div>
    <div class="customer-doc">
      <div class="customer-doc__item" v-for="(item, index) of documentCustomer" :key="index.id">
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
      </div>
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