<template>
  <div>
    <div class="news__wrapper">
      <h1 class="news__heading">Yangiliklar</h1>
      <div class="news__header">
        <b-container>
          <b-row>
            <b-col lg="6" class="px-0">
              <nuxt-link to="" class="main__news-link">
                <img src="../assets/images/news/mainnews.jpg" alt="">
              </nuxt-link>
            </b-col>
            <b-col lg="6">
              <nuxt-link to="" class="content-link">
                <div class="news__content">
                  <h6 class="news__title">Lorem ipsum dolor sit amet consectetur adipiscing elit </h6>
                  <div class="news__text">Lorem ipsum dolor sit amet consectetur adipiscing
                    elit. Non nec, bibendum feugiat lectus eu sagittis adipiscing odio.Lorem ipsum dolor sit amet consectetur adipiscingelit. Non nec, bibendum feugiat lectus eu sagittis adipiscing odio. Lorem ipsum dolor sit amet consectetur adipiscing
                    elit. Non nec, bibendum feugiat lectus eu sagittis adipiscing odio.Lorem ipsum dolor sit amet consectetur adipiscingelit. Non nec, bibendum feugiat lectus eu sagittis adipiscing odio.Lorem ipsum dolor sit amet consectetur adipiscing</div>
                  <div class="news__meta">
                    <span class="news__meta-calendar">10/10/2020</span>
                    <span class="news__meta-view">156</span>
                  </div>
                </div>
              </nuxt-link>
            </b-col>
          </b-row>
        </b-container>
       
      </div>
      <div class="news__list">
      	 <b-container>
      	<b-row>
      		<b-col lg="4" md="6" sm="6" v-for="item of 9" :key="item" class="align-items-stretch">
      			<div class="news__item">
      				<nuxt-link to="" class="news__item-link">
      				<img src="../assets/images/news/news1.jpg" alt=""
      				>
      				<div class="news__item-content">
      					<h6 class="news__item-content-title">Lorem ipsum dolor si amet , consectetur adipiscing elit</h6>
      					<p class="news__item-content-text"> penatibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.</p>
      					<div class="news__item-content-meta">
      						<span class="news__item-content-meta-calendar">14.07.2020</span>
      						<span class="news__item-content-meta-view">156</span>
      					</div>
      					<div class="more__btn">
      						<b-button type="button" class="question__btn">Batafsil</b-button>
      					</div>
      				</div>
      			</nuxt-link>
      			</div>
      			
      		</b-col>
      	</b-row>
      </b-container>
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
    <!-- /.news__wrapper -->
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
