<template>
  <div>
    <div class="user__priceQuestion">
      <div class="user__priceQuestion-title">Pulli savollarim</div>
      <div class="user__priceQuestion-info" v-for="item of priceAddedQuestion" :key="item.id">
        <p class="user__priceQuestion-name">Savol sarlavxasi: {{item.title}}</p>
        <p class="user__priceQuestion-name">Savol matni: {{item.text}}</p>
        <p>Savol narxi: {{item.price}} so'm</p>
        <nuxt-link :to="'customer-question-price/' + item.id" class="user__priceQuestion-link">Savolga pull to'lash</nuxt-link>
      </div>
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
          console.log('getQuestionCustomerPriceAdded', res)
        })
    }    
  },
  mounted() {
    this.getQuestionCustomerPriceAdded()
  }
}
</script>