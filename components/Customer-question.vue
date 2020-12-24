<template>
  <div>
    <b-container v-if="loader" class="customer-question">
      <div class="user__profile-wrap" v-for="(item, index) of questionCustomer" :key="index.id">
        <div class="user__profile-question">
          <div class="user__profile-question-item" v-if="item.status == 'Pending' || item.status == 'PriceAdded'">
            <div class="user__profile-question-title">
              <b>Savol nomi:</b> {{item.title}} 
            </div>
            <p class="user__profile-question-text">
              <b>Savol matni:</b> {{item.text}} 
            </p>
            <div class="user__profile-question-info">
              <div class="left__block">
                <span class="calendar">{{item.date}}</span>
              </div>

              <div class="right__block">
                <div class="price" v-if="item.price > 0 || item.status == 'PriceAdded'">
                  <div class="mb-4">
                    <font-awesome-icon :icon="['fas', 'money-bill-alt']" />
                    <b>Savol qo'yilgan narx:</b> {{item.price}}
                  </div>
                  <nuxt-link :to="'customer-question-price/' + item.id" class="user__priceQuestion-link">Savolga pull to'lash</nuxt-link>
                </div>
                <div v-if="item.price == null"><b>Savolga naxr qo'yilmagan. Iltimos yarist savolga narx qo'yishini kuting</b></div>
                <div v-if="item.status == 'PaymentDone'">Savolga pul to'langan. Savol narxi {{item.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="questionCustomer.length == 0">
        Siz savol bermagansiz <br>
        <nuxt-link :to="localePath('/askquestions')" style="color: #0056b3"><b>Savol so'rash</b></nuxt-link>
      </div>
    </b-container>
    <div v-else>
      <loading />
    </div>    
  </div>
</template>
<script>
import Loading from '../components/Loading.vue';
export default {
  data() {
    return {
      questionCustomer: [],
      loader: false,
    }
  },
  components: {
    Loading
  },  
  methods: {
    async getQuestionCustomer() {
      await this.$axios.get('question/customer/')
        .then((res) => {
          this.loader = true;
          this.questionCustomer = res.data;
          // console.log('getQuestionCustomer', res)
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