<template>
  <div>
    <b-container v-if="loader" class="customer-ques-page">
      <b-row>
        <b-col cols="12" class="customer-ques">
          <div class="customer-ques__item">
            <div class="customer-ques__title">{{questionCustomer.title}}</div>
            <div class="customer-ques__body">
              {{questionCustomer.text}}
            </div>
            <div class="customer-ques__info">
              <div class="customer-ques__date">{{questionCustomer.date}}</div>
              <div class="customer-ques__answer">Javoblar <span>{{answer.length}}</span></div>
            </div>  
          </div>  
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="customer-answer">
            <b-row>
              <div>
                <div class="customer-answer__title">Javoblar</div>
                <div v-if="answer == ''">Savolga javob berilmagan</div>
              </div>
            </b-row>
            <b-row>
              <div class="customer-answer__item" v-for="item in answer" :key="item.id">
                <div class="customer-answer__text">{{item.text}}</div>
                <div class="customer-answer__file" v-if="item.file !== null">
                  <a :href="$store.state.mediaURL + item.file" target="_blank">Hujjatni yuklab olish</a>
                </div>
                <div class="customer-answer__user">Yurist: <span>{{item.lawyer}}</span></div>
                <div class="customer-answer__date">{{item.date}}</div>
              </div>
            </b-row>            
          </div>
        </b-col>
      </b-row>
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
      questionCustomer: [],
      answer: [],
      loader: false,
    }
  },
  methods: {
    async getQuestionCustomer() {
      await this.$axios.get(`question/customer/${this.$route.params.id}/`)
        .then((res) => {
          this.loader = true;
          this.questionCustomer = res.data;
          // console.log('getQuestionCustomer', res)
        })
    },
    async getQuestionAnswer() {
      await this.$axios.get(`question/answer/?question_id=${this.$route.params.id}`)
        .then((res) => {
          this.loader = true;
          this.answer = res.data;
          // console.log('getQuestionAnswer', res)
        })
    }
  },
  mounted(){
    this.getQuestionCustomer();
    this.getQuestionAnswer()
    
  }
}
</script>