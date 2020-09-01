<template>
  <div>
    <div class="main__page">
      <header class="header">
        <b-container>
          <div class="header__content">
            <h1 class="header__heading">Ishonchli, Sifatli, Onlayn Yuridik xizmatlar</h1>
          <p class="header__motto">Professional yuristlar xizmatidan onlayn foydalaning. O`z savolingizni yozing va bir necha soat ichida javob oling. </p>
          <nuxt-link to="" class="online__service-link">ONLINE XIZMAT <img src="../assets/images/index/Arrow.svg" alt="arrow"></nuxt-link>
          </div>
        </b-container>
      </header>
      <section class="about__service">
        <b-container>
        <span class="about__service-line"></span>
          <b-row>
            <b-col lg="6">
              <h2 class="about__service-heading">Ishonchli, Sifatli, Onlayn Yuridik xizmatlar</h2>
              <p class="about__service-text">Issue outcomes innovation, justice, emerging to philanthropy. Improve the world, global empower communities replicable incubator innovate. Uplift, cocreation blended value empower communities, we must stand up empathetic circular boots on the ground. Segmentation, targeted cocreate academic blended value transparent innovation compelling support.</p>
              <div class="lawyer__user">
                <img src="../assets/images/lawyer.jpg" alt="">
               <span class="lawyer__user-name">Aziza Abdurakhmonova</span>  
              </div>
            </b-col>
            <b-col lg="6">
              <div class="about__service-img-wrap">
              <img src="../assets//images/index/2642882 1.png" alt="" class="about__service-img">
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <div class="solve__with-us">
        <b-container>
          <div class="solve__with-us-header">
            <span class="line"></span>
            <div class="solve__with-us-heading">
              Muammolaringiz Yechimi Biz Bilan
            </div>
            <span class="solve__with-us-motto text-center"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>

          <b-row>
            <b-col lg="3" md="6" sm="6">
              <div class="problem__item">
                <div class="problem__item-number">
                  35 ta
                </div>
                <span class="problem__item-lawyer">Malakali yuristlar</span>
              </div>
            </b-col>
            <b-col lg="3" md="6" sm="6">
              <div class="problem__item">
                <div class="problem__item-number">
                  487 ta
                </div>
                <span class="problem__item-lawyer">Muvaffaqqiyatli ishlar</span>
              </div>
            </b-col>
            <b-col lg="3" md="6" sm="6">
              <div class="problem__item">
                <div class="problem__item-number">
                  367 ta
                </div>
                <span class="problem__item-lawyer">Xursand mijozlar</span>
              </div>
            </b-col>
            <b-col lg="3" md="6" sm="6">
              <div class="problem__item">
                <div class="problem__item-number">
                  542 ta
                </div>
                <span class="problem__item-lawyer">Umumiy ishlar</span>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="news__main-page">
        <b-container>
        <span class="news__main-page-line"></span>
          <div class="news__main-page-header">
            <span class="news__main-page-header-heading">Yangiliklar</span>
            <span class="news__main-page-header-motto"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <b-row>
            <b-col
              lg="4"
              md="6"
              sm="6"
              v-for="item of 3"
              :key="item"
              class="align-items-stretch"
            >
              <div class="news__item">
                <nuxt-link to="" class="news__item-link">
                  <img src="../assets/images/news/news1.jpg" alt="" />
                  <div class="news__item-content">
                    <h6 class="news__item-content-title">
                      Lorem ipsum dolor si amet , consectetur adipiscing elit
                    </h6>
                    <p class="news__item-content-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sem massa lectus tortor feugiat sagittis auctor porta
                      penatibus.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Sem massa lectus tortor feugiat sagittis
                      auctor porta penatibus.
                    </p>
                    <div class="news__item-content-meta">
                      <span class="news__item-content-meta-calendar"
                        >14.07.2020</span
                      >
                      <span class="news__item-content-meta-view">156</span>
                    </div>
                    <div class="more__btn">
                      <b-button type="button" class="question__btn"
                        >Batafsil</b-button
                      >
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </b-col>
            <div class="all__news">
              <b-button class="question__btn all__news-btn"
                >Barcha yangiliklar</b-button
              >
            </div>
          </b-row>
        </b-container>
      </div>
      <!-- news__main-page -->

      <!-- questions part -->
      <div class="questions__index-wrapper">
        <b-container>
          <span class="questions__part-line"></span>
          <h2 class="questions__part-heading">Savollar</h2>
          <div class="questions__block">
            <div class="questions__switch-wrapper">
              <div class="questions__switch">
                  <nuxt-link to="" class="questions__switch-link ">Pullik</nuxt-link>
              <nuxt-link to="" class="questions__switch-link questions__switch-link-active">Bepul</nuxt-link>
              </div>
            
            </div>
            <div class="questions__block-item" v-for="i of 4" :key="i">
              <div class="questions__block-item-mobile d-block d-md-none">
                <div class="questions__block-item-mobile-inner">
                  <div class="questions__block-time ">
               <span>9:16</span>
               <span>23.07.2020</span>
             </div>
             <div class="questions__block-btn">
             <b-button class="question__btn">2ta javob</b-button> 
             </div>
             <div class="questions__block-ranking">
               <div class="questions__block-ranking-star">
                            <vue-stars
                  class="vue__star"
                  name="rate"
                  active-color="#FFC805"
                  inactive-color="#282932"
                  shadow-color="#FFC805"
                  hover-color="#00aced"
                  :max="5"
                  :value="1"
                  :readonly="false"
                  char="★"
                />
               </div>
               <b-button class="question__btn">20000 so’m</b-button>
             </div>
                </div>
                   <div class="questions__block-content">
               <h6 class="questions__block-content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
               <p class="questions__block-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur </p>
             </div>

              </div>
             <div class="questions__block-time d-none d-md-block">
               <span>9:16</span>
               <span>23.07.2020</span>
             </div>
             <div class="questions__block-btn d-none d-md-block">
             <b-button class="question__btn">2ta javob</b-button> 
             </div>
             <div class="questions__block-content d-none d-md-block">
               <h6 class="questions__block-content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
               <p class="questions__block-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum dolor sit amet, consectetur </p>
             </div>
             <div class="questions__block-ranking d-none d-md-block">
               <div class="questions__block-ranking-star">
                            <vue-stars
                  class="vue__star"
                  name="rate"
                  active-color="#FFC805"
                  inactive-color="#282932"
                  shadow-color="#FFC805"
                  hover-color="#00aced"
                  :max="5"
                  :value="1"
                  :readonly="false"
                  char="★"
                />
               </div>
               <b-button class="question__btn d-none d-md-block">20000 so’m</b-button>
             </div>
            </div>
            <div class="questions__block-more">
              <b-button class="questions__block-more-btn">
                Barcha savollar
              </b-button>
            </div>
          </div>
        </b-container>
      </div>
      <!-- end of question part -->
      <div class="how__we-work">
        <b-container>
        <span class="line-dashed d-none d-lg-block"></span>
          <h3 class="how__we-work-heading">Biz qanday ishlaymiz</h3>
          <p class="how__we-work-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <b-row>
            <b-col lg="4">
              <div class="how__we-work-item message">
                <div class="img-box">
                <img src="../assets/images/index/eva_message-circle-outline.svg" alt="">
              </div>
              <span>Savol bering</span>
              </div>
            </b-col>
             <b-col lg="4">
              <div class="how__we-work-item archieve">
                <div class="img-box">
                <img src="../assets/images/index/ri_inbox-archive-line.svg" alt="">
              </div>
              <span>Savol bering</span>
              </div>
            </b-col>
             <b-col lg="4">
              <div class="how__we-work-item subway">
                <div class="img-box">
                <img src="../assets/images/index/subway_like.svg" alt="">
              </div>
              <span>Savol bering</span>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
<div class="swiper__wrapper">
  <b-container>
    <div class="swiper__header">
      <span class="swiper__motto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
      <h4 class="swiper__heading">Yuristlar</h4>
      <span class="line__swiper d-none d-md-block"></span>
    </div>
    <b-row>
      <b-col xl="12">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="i of 6" :key="i">
            <nuxt-link to="" class="swiper__link">
              <div class="lawyer__card">
                <div class="lawyer__card-img">
                  <img src="../assets/images/lawyer-card/member1.jpg" alt="" />
                </div>
                <div class="lawyer__card-info text-center">
                  <div class="lawyer__card-name">John Smith</div>
                  <span class="lawyer__card-place">Toshkent shahri</span>
                  <p class="lawyer__card-category">
                  Kategoriya : <span>Korporativ yurist</span>
                  </p>
                  <span class="lawyer__card-rating"
                  >Reyting: <span>4.0</span>
                  <vue-stars
                    class="vue__star"
                    name="rate"
                    active-color="#FFC805"
                    inactive-color="#282932"
                    shadow-color="#FFC805"
                    hover-color="#00aced"
                    :max="1"
                    :value="1"
                    :readonly="false"
                    char="★"
                  />
                  </span>
                  <div class="lawyer__card-success">
                  Muvaffaqiyatli ishlar soni
                  <span class="lawyer__card-success-count">16</span>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </swiper-slide>     
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      </b-col>
    </b-row>
  </b-container>

</div>
	
      <div class="our__service">
        <b-container>
          <div class="our__service-header">
            <h1 class="our__service-heading">Bizning Xizmatlarimiz</h1>
            <span class="our__service-motto"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>

          <b-row>
            <b-col lg="3" md="4" sm="6">
              <div class="our__service-item">
                <nuxt-link to="" class="our__service-item-link">
                  <img src="../assets/images/our-service/service1.png" alt="" />
                  <div class="our__service-item-type">
                    Oilaviy munosabatlar
                  </div>
                </nuxt-link>
              </div>
            </b-col>
            <b-col lg="3" md="4" sm="6">
              <div class="our__service-item">
                <nuxt-link to="" class="our__service-item-link">
                  <img src="../assets/images/our-service/service2.png" alt="" />
                  <div class="our__service-item-type">
                    Mehnat munosabatlari
                  </div>
                </nuxt-link>
              </div>
            </b-col>
            <b-col lg="3" md="4" sm="6">
              <div class="our__service-item">
                <nuxt-link to="" class="our__service-item-link">
                  <img src="../assets/images/our-service/service3.png" alt="" />
                  <div class="our__service-item-type">
                    Jinoyat huquqi
                  </div>
                </nuxt-link>
              </div>
            </b-col>
            <b-col lg="3" md="4" sm="6">
              <div class="our__service-item">
                <nuxt-link to="" class="our__service-item-link">
                  <img src="../assets/images/our-service/service4.png" alt="" />
                  <div class="our__service-item-type">
                    Tadbirkorlik
                  </div>
                </nuxt-link>
              </div>
            </b-col>
            <b-col lg="3" md="4" sm="6">
              <div class="our__service-item">
                <nuxt-link to="" class="our__service-item-link">
                  <img src="../assets/images/our-service/service5.png" alt="" />
                  <div class="our__service-item-type">
                    Fuqarolik huquqi
                  </div>
                </nuxt-link>
              </div>
            </b-col>
            <b-col lg="3" md="4" sm="6">
              <div class="our__service-item">
                <nuxt-link to="" class="our__service-item-link">
                  <img src="../assets/images/our-service/service6.png" alt="" />
                  <div class="our__service-item-type">
                    Migratsiya
                  </div>
                </nuxt-link>
              </div>
            </b-col>
            <b-col lg="3" md="4" sm="6">
              <div class="our__service-item">
                <nuxt-link to="" class="our__service-item-link">
                  <img src="../assets/images/our-service/service7.png" alt="" />
                  <div class="our__service-item-type">
                    Mol-mulk huquqi
                  </div>
                </nuxt-link>
              </div>
            </b-col>
            <b-col lg="3" md="4" sm="6">
              <div class="our__service-item">
                <nuxt-link to="" class="our__service-item-link">
                  <img src="../assets/images/our-service/service8.png" alt="" />
                  <div class="our__service-item-type">
                    Boshqalar
                  </div>
                </nuxt-link>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    <div class="our__other-services">
      <b-container>
        <div class="our__other-services-header">
          <h2 class="our__other-services-title">Boshqa xizmatlar</h2>
          <p class="our__other-services-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div class="our__other-services-list">
          <div class="our__other-services-item">
            <h4 class="our__other-services-item-title">Telefon konsultatsiya</h4>
            <p class="our__other-services-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div class="our__other-services-item-btn-wrap">
                <b-button class="our__other-services-price">50 ming sum </b-button>
                <b-button class="our__other-services-use">Foydalanish</b-button>
              </div>
                <span class="our__other-services-phone d-none d-lg-block"></span>
          </div>
          
           <div class="our__other-services-item-second ml-auto">
            <h4 class="our__other-services-item-title">Hujjat buyurtma qilish</h4>
            <p class="our__other-services-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div class="our__other-services-item-btn-wrap">
                <b-button class="our__other-services-price">50 ming sum </b-button>
                <b-button class="our__other-services-use">Foydalanish</b-button>
              </div>
              <span class="our__other-services-search d-none d-lg-block"></span>
          </div>
        </div>
      </b-container>
    </div>
    <!-- /.our__other-services -->


      <div class="form__wrapper">
        <b-container>
          <div class="form__header">
            <h4 class="form__heading">
              Savolingizniga qonun doirasida javob oling!
            </h4>
            <!-- /.form__heading -->
            <p class="form__motto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <form action="" method="POST" class="main__form">
            <b-container>
              <b-row>
                <b-col lg="5" class=" order-2 order-lg-1">
                  <input
                    type="email"
                    class="email"
                    placeholder="Email adresingiz"
                  />
                  <input type="text" class="name" placeholder="Ismimgiz" />
                  <input
                    type="tel"
                    class="phone__number"
                    placeholder="Telefon raqamingiz"
                  />
                  <input type="text" class="zip" placeholder="Postcode" />
                  <input type="text" class="topic" placeholder="Topic" />
                </b-col>
                <b-col lg="7" class=" order-1 order-lg-2">
                  <div class="info__wrapper">
                    <div class="img__part">
                      <img src="../assets/images/index/lawyer.png" alt="" />
                    </div>
                    <div class="info__content">
                      <p class="info__content-heading">
                        Type a question in the box below for a consultation with
                        our specialist team.
                      </p>
                      <span class="info__content-small"
                        >Average reponce time 60 mins (during normal office
                        hours)</span
                      >
                      <p class="info__content-tel">
                        Or call us on
                        <nuxt-link to="tel:+99899999999" class="phone"
                          >+998 00 000 00 00</nuxt-link
                        >
                      </p>
                    </div>
                  </div>
                  <!-- /.info__wrapper -->
                </b-col>
              </b-row>
              <textarea
                name="textarea"
                id=""
                class="textarea"
                placeholder="Your Question"
              ></textarea>
            </b-container>
            <b-button class="question__btn submit__btn">Ask a lawyer</b-button>
          </form>
        </b-container>
      </div>
      <!-- /.form__wrapper -->
    </div>
    <!-- /.main__page -->
    <footer class="index__footer">
      <b-container>
        <b-row>
          <b-col lg="4">
            <div class="footer__item">
              <div class="footer__logo">
                <nuxt-link to class="footer__logo-link">
                  <img src="../assets/images/Ресурс 15.png" alt="logo web page" />
                  <span class="legaltech">LegalTech</span>
                </nuxt-link>
              </div>
              <div
                class="footer__motto"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <!-- /.footer__motto -->
            </div>
             <ul class="social__footer-list">
                    <li class="social__footer-item">
                      <nuxt-link to class="social__footer-link social__footer-link-facebook">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                      </nuxt-link>
                    </li>
                    <li class="social__footer-item">
                      <nuxt-link to class="social__footer-link social__footer-link-instagram">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                      </nuxt-link>
                    </li>
                    <li class="social__footer-item">
                      <nuxt-link to class="social__footer-link social__footer-link-telegram">
                        <font-awesome-icon :icon="['fab', 'telegram']" />
                      </nuxt-link>
                    </li>
                     <li class="social__footer-item">
                      <nuxt-link to class="social__footer-link social__footer-link-youtube">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                      </nuxt-link>
                    </li>
                  </ul>
          </b-col>
          <b-col lg="4">
            <div class="index-footer-item">
              <h4 class="index-footer-item-heading">Office Opening Hours</h4>
              <ul class="working-hours">
                <li class="working-hours-item">Monday...............08.00AM-05.00PM</li>
                <li class="working-hours-item">Tuesday..............08.00AM-05.00PM</li>
                <li class="working-hours-item">Wednesday......08.00AM-05.00PM </li>
                <li class="working-hours-item">Thursday.............08.00AM-05.00PM</li>
                <li class="working-hours-item">Friday....................08.00AM-05.00PM</li>
                <li class="working-hours-item"> Saturday.............08.00AM-05.00PM</li>
                <li class="working-hours-item">Sunday................Closed</li>
                   
              </ul>
            </div>
          </b-col>
          <b-col lg="4">
            <div class="index-address">
              <h4 class="index-address-heading">Address</h4>
              <span class="index-address-text">Lorem ipsum dolor 
                sit amet, consectetur elit, </span>
              <nuxt-link to="tel:+99893123-34-345" class="index-address-phone">+998 00 000 00 00</nuxt-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
      </footer>  
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<script>
export default {
//   name: "carrousel",
  data() {
    return {
      swiperOptions: {
        centeredSlides:true,
        spaceBetween: 30,
        centeredSlidesBounds:true,
        centerInsufficientSlides:true,
        // loop: true,
        // autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // Some Swiper option/callback...
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          530: {
            slidesPerView: 1,
          },
          620: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
             spaceBetween: 0,
          },
          992:{
            slidesPerView: 3,
             spaceBetween: 30,
          },
          1100: {
            slidesPerView: 3,
             
          },
          1250: {
            slidesPerView: 4,
             spaceBetween: 30,
          }
        }
      }
    };
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper;
    // }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>
