<template>
  <div>
    <b-container class="lawyer-question">
      <div class="lawyer-ques">
        <div class="lawyer-ques__title">{{questionLawyerItem.title}}</div>
        <div class="lawyer-ques__desc">{{questionLawyerItem.text}}</div>
        <div class="lawyer-ques__date">{{questionLawyerItem.date}}</div>
        <div class="lawyer-ques__cust">Mijoz: {{questionLawyerItem.customer}}</div>
      </div>
      <div class="lawyer-cost" v-if="questionLawyerItem.status == 'Pending' || questionLawyerItem.status == 'PriceAdded'">
        <b-form 
          class="lawyer-cost__form" 
          @submit.prevent="pathPriceQuestionLawyer(questionLawyerItem.id)"
        >
        <!-- v-if="item.is_paid == false" -->
          <b-form-group
            label="Savolga narx kirgizing"
            label-for="input"
          >
            <b-form-input
              id="input"
              type="text"
              v-model="priceQuestion"
              required
            ></b-form-input>
          </b-form-group> 
          <b-button type="submit" variant="primary">narx belgilamoq</b-button>                       
          <b-alert :class="{active: isActiveQuestion}" class="lawyer-cost__text" show variant="success">
            Narx quyildi. Iltimos mijoz adabrit qilishini kuting. <br>
            Mijoz adobrit kigandan so'ng? mijoz tomondan berilgan savol "Bildirishnomalrda" chiqadi          
          </b-alert>   
          <b-alert 
            class="lawyer-cost__payment"
            show 
            variant="primary"
            v-if="questionLawyerItem.price > 0"
          >
            Siz narx belgiladingiz. Savolga siz belgilagan narx {{questionLawyerItem.price}} <br>
            Agar narxni uzgartirmoqchi bulsangiz iltimos savoga qaytadan narx kirgizing
          </b-alert>                
        </b-form>
      </div>
      <!-- v-if="questionLawyerItem.is_paid == false" -->
      <div class="lawyer-ansList" v-if="questionLawyerItem.status == 'PaymentDone' && questionLawyerItem.text !== ''">
        <div class="lawyer-ansList__title">Savolga berilgan javob</div>
        <div class="lawyer-ansList__item">
          <div class="lawyer-ansList__text">
            {{questionLawyerItem.text}}
          </div>
          <div class="lawyer-ansList__date">
            {{questionLawyerItem.date}}
          </div>
        </div>
      </div>
      <div class="lawyer-ans" v-if="questionLawyerItem.status == 'PaymentDone'">
        <div class="lawyer-ans__title">Savolga javob berish</div>
        <b-form 
           @submit.prevent="lawyerQuestionAnswer(questionLawyerItem.id)"
        >
          <b-form-group>
            <b-form-textarea
              v-model="answerQuestion"
            >
            </b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary">Javob bermoq</b-button>
          <b-alert :class="{active: answerQuestionActive}"  class="lawyer-ans__info" show variant="success">Javob mijozga yuborildi</b-alert>
        </b-form>
      </div>
      <!-- <div v-if="questionLawyerItem.status == 'Pending'">Pending</div>
      <div v-if="questionLawyerItem.status == 'PaymentDone'">PaymentDone</div>
      <div v-if="questionLawyerItem.status == 'PaymentAdded'">PaymentAdded</div> -->
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questionLawyerItem: [],
      priceQuestion: '',
      isActiveQuestion: false,
      answerQuestion: '',
      answerQuestionActive: false
    }
  },
  methods: {
    async getQuestionLawyer() {
      await this.$axios.get(`question/lawyer/${this.$route.params.id}/`)
        .then((res) => {
          this.questionLawyerItem = res.data;
          console.log('getQuestionLawyer', res)
        })
    },
    async pathPriceQuestionLawyer(id) {
      await this.$axios.patch(`question/lawyer/${this.$route.params.id}/`, {
        price: this.priceQuestion
      })
        .then((res) => {
          console.log('pathPriceQuestionLawyer', res);
          this.isActiveQuestion = true;
          this.priceQuestion = "";
        })
    },   
    async lawyerQuestionAnswer() {
      await this.$axios.patch(`question/lawyer/${this.$route.params.id}/`, {
        text: this.answerQuestion
      })
        .then((res) => {
          console.log('lawyerQuestionAnswer', res);
          this.answerQuestion = "";
          this.answerQuestionActive = true
        })
    }
  },
  mounted() {
    this.getQuestionLawyer();
  }
}
</script>