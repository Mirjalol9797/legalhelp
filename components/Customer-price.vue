<template>
  <div>
    <div class="user__priceQuestion">
      <div class="user__priceQuestion-title">Pulli savollarim</div>
      <div class="user__priceQuestion-info" v-for="item of priceAddedQuestion" :key="item.id">
        <p class="user__priceQuestion-name"><b>Savol sarlavxasi:</b> {{item.title}}</p>
        <p class="user__priceQuestion-name"><b>Savol matni:</b> {{item.text}}</p>
        <nuxt-link :to="'customer-question-price/' + item.id" class="user__priceQuestion-link">Savolga pull to'lash</nuxt-link>
        <p class="user__priceQuestion-name">
          Pull to'langanidan so'ng yurist javob berishini kuting<br>
          puli to'langan savollar va ularga keladigon javoblar <b>"Javobi kelgan savollar"</b> ro'yxatidan qidiring
        </p>
      </div>
      <div v-if="priceAddedQuestion.length == 0"><b>Sizda puli to'lanishi kerak bo'lgan savollar yo'q</b></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      priceAddedQuestion: []
    }
  },
  methods: {
    async getQuestionCustomerPriceAdded() {
      await this.$axios.get('question/customer/?priceadded=1') 
        .then((res) => {
          this.priceAddedQuestion = res.data;
          // console.log('getQuestionCustomerPriceAdded', res)
        })
    }    
  },
  mounted() {
    this.getQuestionCustomerPriceAdded()
  }
}
</script>