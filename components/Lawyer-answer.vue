<template>
  <div>
    <div class="user__profile-question" v-for="(item, index) of questionLawyer" :key="index.id">
      <div v-if="item.status !== 'PaymentDone'">
        <div class="user__profile-question-item">
          <nuxt-link class="user__profile-question-title" :to="'lawyer-answer/' + item.id">
            Savol nomi: {{item.title}}
          </nuxt-link>
          <p class="user__profile-question-text">
            Savol haqida qisqacha: {{item.text}}
          </p>
          <p class="user__profile-question-customer">
            Savol bergan mijoz: {{item.customer}}
          </p>
          <p class="user__profile-question-date">
            Savol berilgan sana: {{item.date}}
          </p>
          <p class="user__profile-question-price" v-if="item.is_paid == true">
            Savolda quyilgan narx: {{item.price}}
          </p>
          <nuxt-link :to="'lawyer-answer/' + item.id" class="user__profile-question-add">Narx belgilash</nuxt-link>
        </div>
      </div>
      <div v-if="questionLawyer.length == 0 ">Sizga savol berilmagan. </div>
    </div>    
  </div>
</template>
<script>
export default {
  data() {
    return {
      questionLawyer: []
    }
  },
  methods: {
    async getQuestionLawyer() {
      await this.$axios.get('question/lawyer/')
        .then((res) => {
          this.questionLawyer = res.data;
          console.log('getQuestionLawyer', res)
        })
    }  
  },
  mounted() {
    this.getQuestionLawyer()
  }
}
</script>