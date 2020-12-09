<template>
  <div>
    <b-container class="customer-question">
      <div class="user__profile-wrap" v-for="(item, index) of questionCustomer" :key="index.id">
        <div class="user__profile-question">
          <nuxt-link class="user__profile-question-title" :to="'customer-question/' + item.id">
            {{item.title}} 
          </nuxt-link>
          <p class="user__profile-question-text">
            {{item.text}} 
          </p>
          <div class="user__profile-question-info">
            <div class="left__block">
              <!-- <span class="user">
                <font-awesome-icon :icon="['fas', 'user']" />
                Halimov Navruz
              </span> -->
              <span class="calendar">{{item.date}}</span>
            </div>

            <div class="right__block">
              <div class="answer">
                <font-awesome-icon :icon="['fas', 'comment']" />
                Javoblar <span class="counter">1</span>
              </div>
              <div class="price" v-if="item.price > 0">
                <font-awesome-icon :icon="['fas', 'money-bill-alt']" />
                Savol narxi: {{item.price}}
              </div>
              <!-- <span class="location"><font-awesome-icon :icon="['fas', 'map-marker']"/>Buxoro</span> -->
            </div>
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
      questionCustomer: []
    }
  },
  methods: {
    async getQuestionCustomer() {
      await this.$axios.get('question/customer/')
        .then((res) => {
          this.questionCustomer = res.data;
          console.log('getQuestionCustomer', res)
        })
    }  
  },
  mounted() {
    this.getQuestionCustomer()
  }
}
</script>

<style>
  .customer-question {
    padding: 50px 0;
  }
</style>