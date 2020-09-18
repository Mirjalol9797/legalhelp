<template>
  <div>
    <div class="questions__inner-wrapper">
      <b-container>
        <nuxt-link to="" class="left-arrow-link">
          <img src="../../assets/images/left-arrow.svg" alt="" class="img-fluid">
        </nuxt-link>
        <div class="questions__overview-wrapper">
          <div class="questions__overview">
            <div class="questions__overview-meta d-none d-md-block">
              <span class="questions__overview-meta-time">9:16</span>
              <span class="questions__overview-meta-calendar">23.07.2020</span>
            </div>
            <div class="mobile__question-overview d-block d-md-none">
              <div class="mobile__question-overview-inner d-flex justify-content-center align-items-center">
              <div class="questions__overview-meta">
              <span class="questions__overview-meta-time">9:16</span>
              <span class="questions__overview-meta-calendar">23.07.2020</span>
            </div>
                <div class="questions__overview-rate">
              <div class="rating">
                <vue-stars class="vue__star" name="rate" active-color="#0028AA" inactive-color="#282932" shadow-color="##0028AA" hover-color="#00aced" :max="5" :value="3" :readonly="false" char="★" />
              </div>
              <div class="question__further-info">
                <b-button class="question__btn price__btn">20000 so’m</b-button>
                <span class="question__user">John Smith</span>
                <span class="question__place">Toshkent Shahri</span>
              </div>
            </div>
              </div>
            </div>
            <div class="questions__overview-content">
              <h6 class="questions__overview-content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
              <p class="questions__overview-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="questions__overview-rate d-none d-md-block">
              <div class="rating">
                <vue-stars class="vue__star" name="rate" active-color="#0028AA" inactive-color="#282932" shadow-color="##0028AA" hover-color="#00aced" :max="5" :value="3" :readonly="false" char="★" />
              </div>
              <div class="question__further-info">
                <b-button class="question__btn price__btn">20000 so’m</b-button>
                <span class="question__user">John Smith</span>
                <span class="question__place">Toshkent Shahri</span>
              </div>
            </div>
          </div>
          <div class="questions__category">
            <p class="category__type">Savol kategoriyasi : <span>Fuqarolik huquqi (umumiy masalalar)</span></p>
          </div>
        </div>
        <!-- /.questions__overview-wrapper -->
        <h2 class="questions__answer">Javob</h2>
      </b-container>
      <b-container class="answer__margin">
        <div class="answer__wrapper">
          <div class="lawyer__section">
            <img src="../../assets/images/lawyer.jpg" class="rounded" alt="">
            <span class="user__name">John Smith</span>
            <div class="rating">
              <vue-stars class="vue__star" name="rate" active-color="#0028AA" inactive-color="#282932" shadow-color="##0028AA" hover-color="#00aced" :max="5" :value="3" :readonly="false" char="★" />
            </div>
            <span class="user__location">
              Toshkent Shahri
            </span>
            <div class="lawyer__section-meta">
                <span class="lawyer__section-meta-time">9:16</span>
                <span class="lawyer__section-meta-calendar">23.07.2020</span>
            </div>
          </div>
          <div class="answer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <!-- /.answer__wrapper -->
      </b-container>
    </div>
    <!-- /.questions__inner-wrapper -->
  </div>
</template>
