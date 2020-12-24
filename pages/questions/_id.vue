<template>
  <div>
    <div v-if="loader" class="questions__inner-wrapper">
      <b-container>
        <nuxt-link :to="localePath('/questions')" class="left-arrow-link">
          <img
            src="../../assets/images/left-arrow.svg"
            alt=""
            class="img-fluid"
          />
        </nuxt-link>
        <div class="questions__overview-wrapper">
          <div class="questions__overview">
            <div class="questions__overview-meta d-none d-md-block">
              <!-- <span class="questions__overview-meta-time">{{
                questions_inner.answered_date | moment("h:mm")
              }}</span> -->
              <span class="questions__overview-meta-calendar">{{
                questions_inner.answered_date | moment("L")
              }}</span>
            </div>
            <div class="mobile__question-overview d-block d-md-none">
              <div
                class="mobile__question-overview-inner d-flex justify-content-center align-items-center"
              >
                <div class="questions__overview-meta">
                  <!-- <span class="questions__overview-meta-time">{{
                    questions_inner.answered_date | moment("h:mm")
                  }}</span> -->
                  <span class="questions__overview-meta-calendar">{{
                    questions_inner.answered_date | moment("L")
                  }}</span>
                </div>
                <div class="questions__overview-rate">
                  <!-- <div class="rating">
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
                    <b-button class="question__btn price__btn"
                      >{{questions_inner.price}} so’m</b-button
                    >
                    <!-- <span class="question__user">{{questions_inner.answered_by.first_name}} {{questions_inner.answered_by.last_name}}</span> -->
                    <!-- <span class="question__place">Toshkent Shahri</span> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="questions__overview-content">
              <h6 class="questions__overview-content-heading">
                {{ questions_inner.title }}
              </h6>
            </div>
            <div class="questions__overview-rate d-none d-md-block">
              <!-- <div class="rating">
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
                <b-button class="question__btn price__btn">{{questions_inner.price}} so’m</b-button>
                <!-- <span class="question__user">Jons Smith</span> -->
                <!-- <span class="question__place">Toshkent Shahri</span> -->
              </div>
            </div>
          </div>
          <div class="questions__category">
            <p class="category__type">
              Savol kategoriyasi :
              <span>{{questions_inner.category}}</span>
            </p>
          </div>
        </div>
        <!-- /.questions__overview-wrapper -->
        <h2 class="questions__answer">Javob</h2>
      </b-container>
      <b-container class="answer__margin">
        <div class="answer__wrapper">
          <div class="lawyer__section">
            <!-- <img :src="questions_inner.lawyer_image" class="rounded" :alt="questions_inner.lawyer_name" /> -->
            <!-- <span class="user__name">{{questions_inner.lawyer_name}} {{questions_inner.lawyer_surname}}</span>  -->
            <!-- <div class="rating">
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

            <!-- <span class="user__location">
              Toshkent Shahri
            </span> -->
            <div class="lawyer__section-meta">
              <!-- <span class="lawyer__section-meta-time">{{
                questions_inner.answered_date | moment("h:mm")
              }}</span> -->
              <span class="lawyer__section-meta-calendar">{{
                questions_inner.answered_date | moment("L")
              }}</span>
            </div>
          </div>
          <div class="answer__text" v-html="questions_inner.answer"></div>
        </div>
        <!-- /.answer__wrapper -->
      </b-container>
    </div>
    <div v-else>
      <loading />
    </div>       
    <!-- /.questions__inner-wrapper -->
  </div>
</template>
<script>
import Loading from '../../components/Loading.vue';
export default {
  data() {
    return {
      questions_inner: [],
      loader: false,
    };
  },
  methods: {
    async getSingleQuestions() {
      await this.$axios
        .get(`services/${this.$route.params.id}/`)
        .then(res => {
          this.loader = true;
          this.questions_inner = res.data;
          // console.log('getSingleQuestions', res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getSingleQuestions();
  }
};
</script>
