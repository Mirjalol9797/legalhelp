<template>
  <div>
    <b-container class="customer-question">
      <div class="user__profile-wrap" v-for="(item, index) of questionCustomer" :key="index.id">
        <div class="user__profile-question">
          <div class="user__profile-question-item" v-if="item.status == 'Pending' || item.status == 'PriceAdded'">
            <div class="user__profile-question-title">
              {{item.title}} 
            </div>
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
                <!-- <div class="answer">
                  <font-awesome-icon :icon="['fas', 'comment']" />
                  Javoblar <span class="counter">1</span>
                </div> -->
                <div class="price" v-if="item.price > 0 || item.status == 'PriceAdded'">
                  <font-awesome-icon :icon="['fas', 'money-bill-alt']" />
                  Savol qo'yilgan narx: {{item.price}} <br>
                  pull to'lash uchun iltimos "Bildirishnomalar" ga o'ting
                </div>
                <div v-if="item.price == null">Savolga naxr qo'yilmagan. Iltimos yarist savolga narx qo'yishini kuting</div>
                <div v-if="item.status == 'PaymentDone'">Savolga pul to'langan. Savol narxi {{item.price}}</div>
                <!-- <span class="location"><font-awesome-icon :icon="['fas', 'map-marker']"/>Buxoro</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="questionCustomer.length == 0">
        Siz savol bermagansiz <br>
        <nuxt-link :to="localePath('/askquestions')">Savol so'rash</nuxt-link>
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