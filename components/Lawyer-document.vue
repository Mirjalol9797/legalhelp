<template>
  <div>
    <div class="lawyer__documents">
      <div class="lawyer__documents-wrap" v-for="item in documentLawyer" :key="item.id">
        <div v-if="item.status !== 'PaymentDone'">
          <div class="lawyer__documents_item">
            <div class="lawyer__documents-title">Hujjat nomi: {{item.title}}</div>
            <div class="lawyer__documents-desc">Hujjat haqida: {{item.text}}</div>
            <!-- <div class="lawyer__documents-categ">Hujjat toifasi: {{item.category}}</div> -->
            <!-- <div class="lawyer__documents-subcateg">Hujjat pastki toifasi: {{item.sub_category}}</div> -->
            <div class="lawyer__documents-link">
              <a :href="item.doc_file" target="_blank">Hujjat yuklab olish</a>
            </div>
            <div class="lawyer__documents-customer">Hujjat buyirgan mijoz: {{item.customer}}</div>
            <div class="lawyer__documents-date">Hujjat buyirilgan sana: {{item.date}}</div>
            <!-- <div class="lawyer__documents-price"  v-if="item.is_paid == true">Hujjat quyilgan narx: {{item.price}}</div> -->
            <nuxt-link :to="'lawyer-document/' + item.id" class="lawyer__documents-btn">Hujjatga naxr belgilash</nuxt-link>
          </div>
        </div>
        <div v-else>Sizda narx belgilamagan savollariz yo'q</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      documentLawyer: [],
      isActiveDocument: false,
      priceDocument: ''
    }
  },
  methods: {
    async getDocumentLawyer() {
      await this.$axios.get('document/lawyer/')
        .then((res) => {
          this.documentLawyer = res.data;
          console.log('getDocumentLawyer', res)
        })
    }
  },
  mounted() {
    this.getDocumentLawyer();
  }
}
</script>