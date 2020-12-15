<template>
  <div>
    <b-container class="lawyer-question">
      <div class="lawyer-ques">
        <div class="lawyer-ques__title">{{documentLawyerList.title}}</div>
        <div class="lawyer-ques__desc">{{documentLawyerList.text}}</div>
        <div class="lawyer-ques__doc">
          <a :href="documentLawyerList.doc_file" target="_blank">Hujjatni yuklab olish</a>
        </div>
        <div class="lawyer-ques__date">{{documentLawyerList.date}}</div>
        <div class="lawyer-ques__cust">Mijoz: {{documentLawyerList.customer}}</div>
        <!-- <div class="lawyer-ques__cust">Mijoz: {{documentLawyerList.category}}</div> -->
        <!-- <div class="lawyer-ques__cust">Mijoz: {{documentLawyerList.sub_category}}</div> -->       
      </div>
      <div class="lawyer-cost" v-if="documentLawyerList.status == 'Pending' || documentLawyerList.status == 'PriceAdded'">
        <b-form 
          class="lawyer-cost__form"
          @submit.prevent="patchPriceDocumentLawyer(documentLawyerList.id)"
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
          <b-button type="submit" variant="primary">narx belgilamoq</b-button>                       
            <b-alert :class="{active: isActiveDocument}" class="lawyer-cost__text" show variant="success">
              Narx quyildi. Iltimos mijoz adabrit qilishini kuting. <br>
              Mijoz adobrit kigandan so'ng? mijoz tomondan berilgan savol "Bildirishnomalrda" chiqadi          
            </b-alert>   
            <b-alert 
              class="lawyer-cost__payment"
              show 
              variant="primary"
              v-if="documentLawyerList.price > 0"
            >
              Siz narx belgiladingiz. Savolga siz belgilagan narx {{documentLawyerList.price}} <br>
              Agar narxni uzgartirmoqchi bulsangiz iltimos savoga qaytadan narx kirgizing
            </b-alert>                  
        </b-form>       
      </div>
      <div class="lawyer-ans">
        <div class="lawyer-ans__title">Savolga javob berish</div>
        <b-form>
          <b-form-group>
            <b-form-textarea
              
            >
            </b-form-textarea>
          </b-form-group>
          
        </b-form>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      documentLawyerList: [],
      priceDocument: '',
      isActiveDocument: false,
    }
  },
  methods: {
    async getDocumentLawyer() {
      await this.$axios.get(`document/lawyer/${this.$route.params.id}/`)
        .then((res) => {
          this.documentLawyerList = res.data;
          console.log('getDocumentLawyer', res)
        })
    },
    async patchPriceDocumentLawyer(id) {
      await this.$axios.patch(`document/lawyer/${this.$route.params.id}/`, {
        price: this.priceDocument
      })
        .then((res) => {
          console.log('patchPriceDocumentLawyer', res)
          this.isActiveDocument = true
        })
    }    
  },
  mounted() {
    this.getDocumentLawyer()
  }
}
</script>