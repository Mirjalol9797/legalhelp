<template>
  <div>
    <div class="user__profile-question" v-for="(item, index) of questionLawyer" :key="index.id">
      <div v-if="item.status !== 'PaymentDone'">
        <div class="user__profile-question-item">
          <div class="user__profile-question-title" >
            <b>Savol nomi:</b> {{item.title}}
          </div>
          <p class="user__profile-question-text">
            <b> Savol haqida qisqacha:</b> {{item.text}}
          </p>
          <p class="user__profile-question-customer">
            <b> Savol bergan mijoz:</b> {{item.customer}}
          </p>
          <p class="user__profile-question-date">
            <b>Savol berilgan sana:</b> {{item.date}}
          </p>
          <!-- <p class="user__profile-question-price" v-if="item.is_paid == true">
            <b>Savolda quyilgan narx:</b> {{item.price}}
          </p>
          <p class="user__profile-question-price" v-if="item.is_paid == false">
            <b>Savolga narx qo'yilmagan</b>
          </p> -->
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