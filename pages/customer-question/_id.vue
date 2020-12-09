<template>
  <div>
    <b-container class="customer-ques-page">
      <b-row>
        <b-col cols="12" class="customer-ques">
          <div class="customer-ques__item">
            <div class="customer-ques__title">{{questionCustomer.title}}</div>
            <div class="customer-ques__body">
              {{questionCustomer.text}}
            </div>
            <div class="customer-ques__info">
              <div class="customer-ques__date">{{questionCustomer.date}}</div>
              <div class="customer-ques__answer">Javoblar <span>2</span></div>
            </div>  
          </div>  
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="customer-answer">
            <b-row>
              <div class="customer-answer__title">Javoblar</div>
            </b-row>
            <b-row>
              <div class="customer-answer__item" v-for="item in answer" :key="item.id">
                <b-col>{{item.text}}</b-col>
              </div>
            </b-row>            
          </div>
        </b-col>
      </b-row>
    </b-container> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      questionCustomer: [],
      answer: []
    }
  },
  methods: {
    async getQuestionCustomer() {
      await this.$axios.get(`question/customer/${this.$route.params.id}/`)
        .then((res) => {
          this.questionCustomer = res.data;
          console.log('getQuestionCustomer', res)
        })
    },
    async getQuestionAnswer() {
      await this.$axios.get(`question/answer/?question_id=${this.$route.params.id}/`)
        .then((res) => {
          this.answer = res.data;
          console.log('getQuestionAnswer', res)
        })
    }
  },
  mounted(){
    this.getQuestionCustomer();
    this.getQuestionAnswer()
    
  }
}
</script>