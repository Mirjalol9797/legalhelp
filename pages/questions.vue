<template>
  <div>
    <div class="questions__page-wrapper">
      <div class="container">
        <h1 class="questions__page-header">Savollar</h1>
        <div class="questions__wrapper">
          <div class="question__item" v-for="i of 9" :key="i">
            <div class="question__meta d-none d-md-block">
              <div class="question__meta-inner">
                <span class="question__meta-time">9:16</span>
                <span class="question__meta-calendar">23.07.2020</span>
                <b-button class="question__meta-btn question__btn">2ta javob</b-button>
              </div>
            </div>
            <!--question__meta-->
            <div class="inforation__wrapper d-block d-md-none">
              <div class="information__wrapper-outer d-flex justify-content-center align-items-center">
                  <div class="question__further">
              <div class="question__ranking">
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
              </div>
              <div class="question__further-info">
                <b-button class="question__btn price__btn">20000 so’m</b-button>
                <span class="question__user">John Smith</span>
                <span class="question__place">Toshkent Shahri</span>
              </div>
            </div>
              <div class="question__meta">
              <div class="question__meta-inner">
                <b-button class="question__meta-btn question__btn">2ta javob</b-button>
                <span class="question__meta-time">9:16</span>
                <span class="question__meta-calendar">23.07.2020</span>
              </div>
            </div>
              </div>
               
            </div>
            <div class="question__item-info">
              <h6
                class="question__item-title"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
              <p
                class="question__item-text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <!--QUESTION Item info-->
            <div class="question__further d-none d-md-block">
              <div class="question__ranking">
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
              </div>
              <div class="question__further-info">
                <b-button class="question__btn price__btn">20000 so’m</b-button>
                <span class="question__user">John Smith</span>
                <span class="question__place">Toshkent Shahri</span>
              </div>
            </div>
          </div>
          <!-- question item -->
        </div>
      </div>
      <div class="pagination__menu">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          first-text="Boshi"
          last-text="Oxiri"
        ></b-pagination>
      </div>
    </div>
    <!-- /.questions__wrapper -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 1,
    };
  },
};
</script>