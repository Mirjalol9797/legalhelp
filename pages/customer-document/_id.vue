<template>
  <div>
    <b-container class="customer-docPage">
      <div class="customer-docPage__wrap">
        <div class="customer-docPage__title">{{documentCustomer.title}}</div>
        <div class="customer-docPage__text">{{documentCustomer.text}}</div>
        <div class="customer-docPage__link">
          <a :href="documentCustomer.doc_file" target="_blank">hujjatni yuklab olish</a>
        </div>
      </div>
      <div class="customer-docAns">
        <div class="customer-docAns__title"></div>
        <div class="customer-docAns__item">
          <div class="customer-docAns__subtitle"></div>
          <div class="customer-docAns__doc">
            <a href=""></a>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      documentCustomer: [],
      answer: []
    }
  },
  methods: {
    async getDocumentCustomer() {
      await this.$axios.get(`document/customer/${this.$route.params.id}/`)
        .then((res) => {
          this.documentCustomer = res.data;
          console.log('getDocumentCustomer', res)
        })
    },
    async getDocumentAnswer() {
      await this.$axios.get(`question/answer/?question_id=${this.$route.params.id}`)
        .then((res) => {
          this.answer = res.data;
          console.log('getDocumentAnswer', res)
        })
    }    
  },
  mounted() {
    this.getDocumentCustomer(),
    this.getDocumentAnswer()
  }
}
</script>