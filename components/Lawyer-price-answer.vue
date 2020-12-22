<template>
  <div class="mb-5">
    <h2 class="lawyer__questions-h2">Puli to'langan savollar</h2>
    <div class="lawyer__questions" v-for="item in priceAddedQuestion" :key="item.id">
      <div class="lawyer__questions_item" >
        <div class="lawyer__questions-title"><b> Savol nomi:</b> {{item.title}}</div>
        <div class="lawyer__questions-text"><b> Savol haqida:</b> {{item.text}}</div>
        <div class="lawyer__questions-customer"><b> Savol bergan mijoz:</b> {{item.customer}}</div>
        <div class="lawyer__questions-date"><b> Savol berilgan sana: </b>{{item.date}}</div>
        <div class="lawyer__questions-price"><b> Savolga quyilgan narx:</b> {{item.price}}</div>
        <div class="lawyer__questions-priceAdded" v-if="item.status == 'PaymentDone'">Savolga pull to'landi</div>
        <div class="lawyer__questions-priceAdded" v-if="item.status == 'QuestionCompleted'">Savolga pull to'langan</div>
        <nuxt-link :to="'lawyer-answer/' + item.id" class="lawyer__questions-answer" v-if="item.status == 'PaymentDone'">
          Savolga javob berish 
        </nuxt-link>
        <div class="lawyer__questions-info" v-if="item.status == 'QuestionCompleted'">
          Savolga javob berilgan. Agar uzgartirish kiritmoqchi bulsangiz, uzgartirish tugmasini bosing 
        </div>
        <nuxt-link :to="'lawyer-answer/' + item.id" class="lawyer__questions-answer" v-if="item.status == 'QuestionCompleted'">
          Javobni uzgartirish 
        </nuxt-link>
      </div>
    </div>
    <div v-if="priceAddedQuestion.length == 0" class="mt-4">Sizda puli to'langan savollar mavjud emas</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      priceAddedQuestion: [],
      answer: []
    }
  },
  methods: {
    async getQuestionLawyerPriceAdded() {
      await this.$axios.get('question/lawyer/?is_paid=1')
        .then((res) => {
          this.priceAddedQuestion = res.data;
          console.log('getQuestionLawyerPriceAdded', res)
        })
    }
  },
  mounted() {
    this.getQuestionLawyerPriceAdded()
  }
}
</script>