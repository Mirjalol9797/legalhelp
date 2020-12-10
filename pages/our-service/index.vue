<template>
    <div>
        <div class="our-services">
            <b-container>
                <h1 class="our-services-heading">{{$t('service.title')}}</h1>
              <b-row>
                <b-col lg="6">
                  <div class="service__list">
                     <font-awesome-icon :icon="['fas','phone']"  class="service__list-icon"/> 
                     <div class="service__list-content">
                       <!-- <span class="service__list-top">{{$t('service.phone_toptext')}}</span> -->
                    <div class="service__list-title">{{$t('service.phone_title')}}</div>
                    <!-- <div class="service__list-text">{{$t('service.phone_subtitle')}}</div> -->
                    <div class="service__list-text">Adminga kung'iroq qilish</div>
                    <b-button class="service__list-btn" href="tel:+998999276993">{{$t('service.phone_btn')}}</b-button>
                     </div>
                  </div>
                 
                </b-col>
                <b-col lg="6">
                   <div class="service__list service__list--spacing">
                     <font-awesome-icon :icon="['fas','file']"  class="service__list-icon"/>
                     <div class="service__list-content">
                       <!-- <span class="service__list-top">500 000 so'm</span> -->
                    <div class="service__list-title">Hujjat buyurtma qilish</div>
                    <div class="service__list-text">Yuridik hujjat uchun buyurtma bering va qisqa vaqtda natijaga erishing.</div>
                    <b-button 
                      class="service__list-btn test" 
                      v-if="loggedIn && $auth.user.is_customer"
                      :to="localePath('/order-documents')"
                    >
                      Buyurtma qilish
                    </b-button>
                    <b-button   
                      class="service__list-btn nonono" 
                      v-else 
                      :to="localePath('/reg')"
                    >
                      Buyurtma qilish
                    </b-button>
                    </div>
                  </div>
                </b-col>
              </b-row>
           
              <b-row data-aos="fade-up" data-aos-duration="500">
                <b-col lg="3" md="4" sm="6">
                  <div class="our__service-item">
                    <nuxt-link to="" class="our__service-item-link">
                      <img src="../../assets/images/our-service/service1.png" alt="" />
                      <div class="our__service-item-type">
                        Oilaviy munosabatlar
                      </div>
                    </nuxt-link>
                  </div>
                </b-col>
                <b-col lg="3" md="4" sm="6">
                  <div class="our__service-item">
                    <nuxt-link to="" class="our__service-item-link">
                      <img src="../../assets/images/our-service/service2.png" alt="" />
                      <div class="our__service-item-type">
                        Mehnat munosabatlari
                      </div>
                    </nuxt-link>
                  </div>
                </b-col>
                <b-col lg="3" md="4" sm="6">
                  <div class="our__service-item">
                    <nuxt-link to="" class="our__service-item-link">
                      <img src="../../assets/images/our-service/service3.png" alt="" />
                      <div class="our__service-item-type">
                        Jinoyat huquqi
                      </div>
                    </nuxt-link>
                  </div>
                </b-col>
                <b-col lg="3" md="4" sm="6">
                  <div class="our__service-item">
                    <nuxt-link to="" class="our__service-item-link">
                      <img src="../../assets/images/our-service/service4.png" alt="" />
                      <div class="our__service-item-type">
                        Tadbirkorlik
                      </div>
                    </nuxt-link>
                  </div>
                </b-col>
                <b-col lg="3" md="4" sm="6">
                  <div class="our__service-item">
                    <nuxt-link to="" class="our__service-item-link">
                      <img src="../../assets/images/our-service/service5.png" alt="" />
                      <div class="our__service-item-type">
                        Fuqarolik huquqi
                      </div>
                    </nuxt-link>
                  </div>
                </b-col>
                <b-col lg="3" md="4" sm="6">
                  <div class="our__service-item">
                    <nuxt-link to="" class="our__service-item-link">
                      <img src="../../assets/images/our-service/service6.png" alt="" />
                      <div class="our__service-item-type">
                        Migratsiya
                      </div>
                    </nuxt-link>
                  </div>
                </b-col>
                <b-col lg="3" md="4" sm="6">
                  <div class="our__service-item">
                    <nuxt-link to="" class="our__service-item-link">
                      <img src="../../assets/images/our-service/service7.png" alt="" />
                      <div class="our__service-item-type">
                        Mol-mulk huquqi
                      </div>
                    </nuxt-link>
                  </div>
                </b-col>
                <b-col lg="3" md="4" sm="6">
                  <div class="our__service-item">
                    <nuxt-link to="" class="our__service-item-link">
                      <img src="../../assets/images/our-service/service8.png" alt="" />
                      <div class="our__service-item-type">
                        Boshqalar
                      </div>
                    </nuxt-link>
                  </div>
                </b-col>
              </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["loggedIn", "user"])
  },
}
</script>