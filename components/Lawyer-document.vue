<template>
  <div>
    <div class="lawyer__documents">
      <div class="lawyer__documents_item" v-for="item in documentLawyer" :key="item.id">
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
        <b-form 
          class="lawyer__documents-form"
          @submit.prevent="patchPriceDocumentLawyer(item.id)"
          v-if="item.is_paid == false"
        >
          <b-form-group
            label="Hujjatga narx kirgizing"
            label-for="input"
          >
            <b-form-input
              id="input"
              type="text"
              v-model="priceDocument"
              required
            ></b-form-input>
          </b-form-group> 
          <b-button type="submit" variant="primary">Saqlash</b-button>                     
          <div :class="{active: isActiveDocument}" class="lawyer__documents-form-text">
            Narx quyildi. Iltimos mijoz adabrit qilishini kuting. <br>
            Mijoz adobrit kigandan so'ng? mijoz tomondan berilgan savol "Bildirishnomalrda" chiqadi
          </div>     
        </b-form>
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