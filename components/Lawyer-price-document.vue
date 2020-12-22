<template>
  <div>
    <div class="lawyer__documents">
      <div class="lawyer__documents-h2">Puli to'langan hujjatlar</div>
      <div class="lawyer__documents__wrap" v-for="item in priceAddedDocumnet" :key="item.id">
        <div v-if="item.status == 'PaymentDone' || item.status == 'DocumentCompleted'">
          <div class="lawyer__documents_item">
         
            <div class="lawyer__documents-title">Hujjat nomi: {{item.title}}</div>
            <div class="lawyer__documents-desc">Hujjat haqida: {{item.text}}</div>
            <div class="lawyer__documents-link">
              <a :href="item.doc_file" target="_blank">Hujjat yuklab olish</a>
            </div>
            <div class="lawyer__documents-customer">Hujjat buyirgan mijoz: {{item.customer}}</div>
            <div class="lawyer__documents-date">Hujjat buyirilgan sana: {{item.date}}</div>    
            <div class="lawyer__documents-price">Quyilgan narx: {{item.price}}</div>
            <div>Hujjatga pull to'langan</div>
            <nuxt-link 
              :to="'lawyer-document/' + item.id" 
              class="lawyer__documents-btn"
              v-if="item.status == 'PaymentDone'"
            >
              Hujjatga javob berish
            </nuxt-link>
            <div class="lawyer__questions-info" v-if="item.status == 'DocumentCompleted'">
              Hujjatga javob berilgan. Agar uzgartirish kiritmoqchi bulsangiz, uzgartirish tugmasini bosing 
            </div>
            <nuxt-link :to="'lawyer-document/' + item.id" class="lawyer__questions-answer" v-if="item.status == 'DocumentCompleted'">
              Hujjatni uzgartirish 
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="priceAddedDocumnet.length == 0" class="mt-4">Sizda puli to'langan savollar mavjud emas</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      priceAddedDocumnet: []
    }
  },
  methods: {
    async getDocumentLawyerPriceAdded() {
      await this.$axios.get('document/lawyer/?paymentdone=1') 
        .then((res) => {
          this.priceAddedDocumnet = res.data;
          console.log('getDocumentLawyerPriceAdded', res)
        })
    },
  },
  mounted() {
    this.getDocumentLawyerPriceAdded()
  }
}
</script>