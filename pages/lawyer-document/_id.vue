<template>
  <div>
    <b-container class="lawyer-question" v-if="loader">
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
          :class="{cost__form: costFormActive}"
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
        <b-alert :class="{active: isActiveDocument}" class="lawyer-cost__text" show variant="success">
          Narx quyildi. Iltimos mijoz pull to'lashini kuting. <br>
          Mijoz pull to'laganidan so'ng, mijoz tomondan berilgan savol "Bildirishnomalarda" chiqadi       
        </b-alert>          
      </div>

      <div class="lawyer-ansList" v-if="documentLawyerList.status == 'PaymentDone' || documentLawyerList.status == 'DocumentCompleted'">
        <div class="lawyer-ansList__item" v-for="item in document" :key="item.id"> 
          <div class="lawyer-ansList__title">Savolga berilgan javob</div>
          <div class="lawyer-ansList__title">
            {{item.title}}
          </div>
          <div class="lawyer-ansList__text">
            {{item.text}}
          </div>
          <div class="lawyer-ansList__file">
            <a :href="$store.state.mediaURL + item.doc_file" target="_blank">File yuklab olish</a>
          </div>
          <div class="lawyer-ansList__date">
            {{item.date}}
          </div>
          <b-button type="submit" variant="primary" @click="OpenEditForm()">Javobni uzgartirish</b-button>
          <div 
            class="lawyer-ans answer-edit" 
            :class="{openEdit: openEditActive}"
            
          >
            <div class="lawyer-ans__title">Javobni uzgartirish</div>
            <form
              @submit.prevent="patchAnswer(item.id)"
            >
              <div>
                <label for="title">Sarlovha <span>*</span></label>
                <input id="title" type="text" v-model="form.title" class="form-control" required>
              </div>
              <div>
                <label for="textarea">Matn <span>*</span></label>
                <textarea name="" id="textarea" v-model="form.text" required></textarea>
              </div>
              <div>
                <label for="file">Hujjat junatish <span>*</span></label>
                <input type="file" @change="changeFile" id="file" ref="file" required>
              </div>
              <b-button type="submit" variant="primary">Javob berish</b-button>
              <b-alert class="lawyer-ans__info" show variant="success">Javob o'zgartirildi va mijozga yuborildi</b-alert>
            </form>
          </div>            
        </div>
      </div>
      <!-- v-if="documentLawyerList.status == 'PaymentDone'" -->
      <div class="lawyer-ans" v-if="documentLawyerList.status == 'PaymentDone' && document.length == 0">
        <div class="lawyer-ans__title">Savolga javob berish</div>
        <form
          class="lawyer-ans__form"
          @submit.prevent="postDocument(documentLawyerList.id)"
        >
          <div>
            <label for="title">Sarlovha <span>*</span></label>
            <input id="title" type="text" v-model="form.title" class="form-control" required>
          </div>        
          <div>
            <label for="textarea">Matn <span>*</span></label>
            <textarea id="textarea" v-model="form.text" class="form-control" required></textarea>
          </div>
          <div>
            <label for="file">Hujjat junatish <span>*</span></label>
            <input type="file" @change="addFile" id="file" ref="file" required>
          </div>
          <b-button type="submit" variant="primary">Javob bermoq</b-button>
          <b-alert :class="{active: answerDocumentActive}"  class="lawyer-ans__info" show variant="success">Javob mijozga yuborildi</b-alert>
        </form>
      </div>
    </b-container>
    <div v-else>
      <loading /> 
    </div>     
  </div>
</template>
<script>
export default {
  data() {
    return {
      loader: false,
      documentLawyerList: [],
      priceDocument: '',
      isActiveDocument: false,
      answerDocumentActive: false,
      form: {
        text: '',
        title: '',
      },
      doc_file: '',
      answer: [],
      document: [],
      openEditActive: false,
      costFormActive: false
    }
  },
  methods: {
    async getDocumentLawyer() {
      await this.$axios.get(`document/lawyer/${this.$route.params.id}/`)
        .then((res) => {
          this.loader = true;
          this.documentLawyerList = res.data;
          // console.log('getDocumentLawyer', res)
        })
    },
    async patchPriceDocumentLawyer(id) {
      await this.$axios.patch(`document/lawyer/${this.$route.params.id}/`, {
        price: this.priceDocument
      })
        .then((res) => {
          // console.log('patchPriceDocumentLawyer', res)
          this.isActiveDocument = true;
          this.costFormActive = true
        })
    },
    async getQuestionAnswer() {
      await this.$axios.get(`question/answer/?question_id=${this.$route.params.id}`)
      .then((res) => {
        this.answer = res.data;
        // console.log('getQuestionAnswer', res)
      })
    },
    async patchFileDocumentLawyer() {
      await this.$axios.patch(`document/lawyer/${this.$route.params.id}/`, {
        text: this.text
      })
        .then((res) => {
          // console.log('patchFileDocumentLawyer', res);
          this.text = "";
          this.answerDocumentActive = true
        })
    },
    async getDocument() {
      await this.$axios.get(`document/send/?document=${this.$route.params.id}`) 
        .then((res) => {
          this.document = res.data;
          // console.log('getDocument', res)
        })
    },  
    addFile(e) {
      this.file = e.target.files[0]
      this.$refs.file.innerHTML = e.target.files[0].name;
    },  
    changeFile(e) {
      this.file = e.target.files[0]
      this.$refs.file.innerHTML = e.target.files[0].name;
    },      
    async postDocument() {
      const form = new FormData()
      form.append('title', this.form.title)
      form.append('text', this.form.text)
      form.append('doc_file', this.file)
      await this.$axios.post(`document/send/?document=${this.$route.params.id}`, form)
        .then((res) => {
          // console.log('postAnswer', res);
          this.form.title = "";
          this.form.text = "";
          this.file = "";
          this.answerDocumentActive = true;
          this.getDocument();
          
        })
    },
    async patchAnswer(id) {
      const form = new FormData()
      form.append('title', this.form.title)
      form.append('text', this.form.text)
      form.append('doc_file', this.file)
      await this.$axios.patch(`document/send/${id}/`, form)
        .then((res) => {
          // console.log('patchAnswer', res)
          this.getDocument()
          this.openEditActive = false
          try {
            this.$toast.success({
              title: `Javob muvafaqiyatli uzgartirildi`,
              message: ` `
            });
          }
          catch {
            this.$toast.error({
              title: `Javob uzgartirilmadi`,
              message: ``
            });
          }
        })
    },
    OpenEditForm() {
      this.openEditActive = true
    }    
  },
  mounted() {
    this.getDocumentLawyer();
    this.getQuestionAnswer();
    this.getDocument()
  }
}
</script>