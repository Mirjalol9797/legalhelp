<template>
  <div>
    <div class="questions__page-wrapper" v-if="loader">
      <div  class="questions__page-wrapper-inner">
        <div class="container">
          <h1 class="questions__page-header">{{ $t("question.title") }}</h1>
          <form class="questions__search">
            <input type="search" :placeholder="$t('question.placeholder')" />
            <input type="submit" :value="$t('question.btn')" />
          </form>
          <div  class="questions__wrapper">
            <div
              class="question__item"
              v-for="(question, index) of questions"
              :key="index"
            >
              <div class="question__meta d-none d-md-block">
                <div class="question__meta-inner">
                  <!-- <span class="question__meta-time">{{
                    question.answered_date | moment("h:mm")
                  }}</span> -->
                  <span class="question__meta-calendar">{{
                    question.answered_date | moment("L")
                  }}</span>
                  <!-- <b-button class="question__meta-btn question__btn">
                    1 ta javob</b-button
                  > -->
                </div>
              </div>
              <!--question__meta-->
              <div class="inforation__wrapper d-block d-md-none">
                <div
                  class="information__wrapper-outer d-flex justify-content-center align-items-center"
                >
                  <div class="question__further">
                    <!-- <div class="question__ranking">
                      <vue-stars
                        class="vue__star"
                        name="rate"
                        active-color="#0028AA"
                        inactive-color="#282932"
                        shadow-color="##0028AA"
                        hover-color="#00aced"
                        :max="5"
                        :value="3"
                        :readonly="false"
                        char="★"
                      />
                    </div> -->
                    <div class="question__further-info">
                      <b-button class="question__btn price__btn">20000 so’m</b-button>
                      <span class="question__user">{{question.lawyer_name}} {{question.lawyer_surname}}</span>
                      <!-- <span class="question__place">Toshkent Shahri</span> -->
                    </div>
                  </div>
                  <div class="question__meta">
                    <div class="question__meta-inner">
                      <!-- <b-button class="question__meta-btn question__btn">2ta javob</b-button> -->
                      <!-- <span class="question__meta-time">9:16</span> -->
                      <span class="question__meta-calendar">{{question.answered_date | moment("L")}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="question__item-info">
                <nuxt-link
                  :to="localePath(`/questions/${question.id}`)"
                  class="question__item-title"
                  >{{ question.title }}</nuxt-link
                >
                <div
                  class="question__item-text"
                  v-html="question.question"
                ></div>
              </div>
              <!--QUESTION Item info-->
              <div class="question__further d-none d-md-block">
                <!-- <div class="question__ranking">
                  <vue-stars
                    class="vue__star"
                    name="rate"
                    active-color="#0028AA"
                    inactive-color="#282932"
                    shadow-color="##0028AA"
                    hover-color="#00aced"
                    :max="5"
                    :value="3"
                    :readonly="false"
                    char="★"
                  />
                </div> -->
                <div class="question__further-info">
                  <b-button class="question__btn price__btn">20000 so’m</b-button>
                  <span class="question__user">{{question.lawyer_name}} {{question.lawyer_surname}}</span>
                  <!-- <span class="question__place">Toshkent Shahri</span> -->
                </div>
              </div>
            </div>
            <!-- question item -->
          </div>
        </div>
        <div class="pagination__menu">
          <b-pagination
            pills
            hide-goto-end-buttons
            :per-page="10"
            v-model="page"
            :total-rows="allProduct"
          ></b-pagination>
        </div>
      </div>
    </div>
    <div v-else>
      <loading />
    </div>    
    <!-- /.questions__wrapper -->
  </div>
</template>

<script>
import Loading from '../../components/Loading.vue';
export default {
  components: {
    Loading
  },
  data() {
    return {
      questions: [],
      allProduct: 0,
      page: 1,
      currentPage: 1,
      loader: false,
    };
  },
  watch: {
    page: {
      handler: function() {
        this.getQuestions();
      }
    }
  },

  computed: {},
  methods: {
    async getQuestions() {
      await this.$axios
        .get(`services/?limit=10&offset=${(this.page - 1) * 10}`)
        .then(res => {
          console.log('getQuestions', res);
          this.loader = true
          if (res.data.results.length > 0) {
            this.allProduct = res.data.count;
            this.questions = res.data.results;
          } else {
            this.questions = [];
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // methods: {
  //   async getQuestions() {
  //     await this.$axios
  //       .get(``)
  //       .then(res => {
  //         if (res.data.length > 0) {
  //           this.questions = res.headers["x-pagination-total-count"];
  //           this.questions = res.data;
  //         } else {
  //           this.questions = [];
  //         }
  //         // commit('setQuestions',res.data.results);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // }
  // created() {
  //   this.$store.dispatch("getQuestions",this.currentPage).then(() => {
  //     // console.log(this.questions);
  //   });
  // }
  mounted() {
    this.getQuestions();
  }
};
</script>
