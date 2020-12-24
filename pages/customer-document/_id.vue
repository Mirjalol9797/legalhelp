<template>
  <div>
    <b-container v-if="loader" class="customer-docPage">
      <div class="customer-docPage__wrap">
        <div class="customer-docPage__title">{{documentCustomer.title}}</div>
        <div class="customer-docPage__text">{{documentCustomer.text}}</div>
        <div class="customer-docPage__link">
          <a :href="$store.state.mediaURL + documentCustomer.doc_file" target="_blank">hujjatni yuklab olish</a>
        </div>
        <div class="customer-docPage__date">{{documentCustomer.date}}</div>
        <div class="customer-docPage__ans">Javoblar <span>{{answer.length}}</span></div>
      </div>
      <div class="customer-docAns">
        <div class="customer-docAns__title">Javoblar</div>
        <div v-if="answer == ''">Savolga javob berilmagan</div>
        <div class="customer-docAns__item" v-for="item in answer" :key="item.id">
          <div class="customer-docAns__subtitle">{{item.title}}</div>
          <div class="customer-docAns__text">{{item.text}}</div>
          <div class="customer-docAns__doc">
            <a :href="$store.state.mediaURL + item.doc_file" target="_blank">Hujjat yaklab olish</a>
          </div>
          <div class="customer-docAns__lawyer">Yurist: <span>{{item.document.lawyer}}</span></div>
          <div class="customer-docAns__date">{{item.date}}</div>
        </div>
      </div>
    </b-container>
    <div v-else>
      <loading />
    </div>
  </div>
</template>
<script>
import Loading from '../../components/Loading.vue';
export default {
  data() {
    return {
      documentCustomer: [],
      answer: [],
      loader: false,
    }
  },
  components: {
    Loading
  },  
  methods: {
    async getDocumentCustomer() {
      await this.$axios.get(`document/customer/${this.$route.params.id}/`)
        .then((res) => {
          this.loader = true;
          this.documentCustomer = res.data;
          // console.log('getDocumentCustomer', res)
        })
    },
    async getDocumentAnswer() {
      await this.$axios.get(`document/recieve/?document_id=${this.$route.params.id}`)
        .then((res) => {
          this.loader = true;
          this.answer = res.data;
          // console.log('getDocumentAnswer', res)
        })
    }    
  },
  mounted() {
    this.getDocumentCustomer(),
    this.getDocumentAnswer()
  }
}
</script>