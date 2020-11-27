<template>
    <div>
        <div class="lawyer__outer">
          <div class="lawyer__outer-inner">
            <b-container>
                <h1 class="lawyer__outer-heading">{{$t('lawyers.lawyers')}}</h1>
                <form action="" class="lawyer__list-search" method="POST">
                  <b-row>
                    <b-col lg="12" xl="4" class="lawyer__list-search-category">
                    <select name="" id="category">
                      <option value="0" disabled se lected>{{$t('category.typequestion')}}</option>
                      <option value="1">{{$t('category.civillaw')}}</option>
                      <option value="2">{{$t('category.work')}}</option>
                      <option value="3">{{$t('category.citizenship')}}</option>
                      <option value="4">{{$t('category.education')}}</option>
                      <option value="5">{{$t('category.entrepreneur')}}</option>
                      <option value="6">{{$t('category.governmentservice')}}</option>
                      <option value="7">{{$t('category.familyrelations')}}</option>
                      <option value="8">{{$t('category.healthcare')}}</option>
                      <option value="9">{{$t('category.criminallaw')}}</option>
                      <option value="10">{{$t('category.court')}}</option>
                      <option value="11">{{$t('category.tax')}}</option>
                      <option value="12">{{$t('category.transportation')}}</option>
                      <option value="13">{{$t('category.agriculture')}}</option>
                      <option value="14">{{$t('category.communal')}}</option>
                      <option value="15">{{$t('category.socialprotection')}}</option>
                      <option value="16">{{$t('category.place')}}</option>
                      <option value="17">{{$t('category.bank')}}</option>
                      <option value="18">{{$t('category.consumer')}}</option>
                      <option value="19">{{$t('category.heritage')}}</option>
                    </select>
                    </b-col>
                    <b-col lg="12" xl="3" class="lawyer__list-search-region">
                    <select name="" id="region-select">
                      <option value="0" selected disabled> {{$t('region.noregion')}}</option>
                      <option value="1">{{$t('region.toshkent')}}</option>
                      <option value="2">{{$t('region.toshkentv')}}</option>
                      <option value="3"> {{$t('region.andijon')}}</option>
                      <option value="4">{{$t('region.buxoro')}}</option>
                      <option value="5"> {{$t('region.jizzax')}}</option>
                      <option value="6"> {{$t('region.qoraqalpogistion')}}</option>
                      <option value="7"> {{$t('region.qashqadaryo')}}</option>
                      <option value="8">{{$t('region.navoi')}}</option>
                      <option value="9">{{$t('region.namangan')}}</option>
                      <option value="10">{{$t('region.samarqand')}}</option>
                      <option value="11">{{$t('region.surxondaryo')}}</option>
                      <option value="12">{{$t('region.sirdaryo')}}</option>
                      <option value="13"> {{$t('region.fargona')}}</option>
                      <option value="14"> {{$t('region.xorazm')}}</option>
                    </select>
                    </b-col>
                    <b-col lg="12" xl="3" class="lawyer__list-search-rating">
                    <select name="rating" id="rating">
                      <option value="0" selected disabled>{{ $t('rating.rate') }}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </b-col>
                    <b-col lg="12" xl="2" class="lawyer__list-search-btn pr-0">
                      <input type="submit" :value="$t('search.search')">
                    </b-col>
                        </b-row>
                </form>
                  <div class="lawyer__outer-list">
                    <b-row data-aos="fade-up" data-aos-duration="500">
                      <b-col md="6" lg="4" xl="3" v-for="i of 12" :key="i" >
                          <nuxt-link :to="localePath(`/lawyers/${i}`)" class="lawyer__card">
                      <div class="lawyer__card-img">
                          <img src="../../assets/images/lawyer-card/member1.jpg" alt="">
                      </div>
                      <div class="lawyer__card-info text-center">
                          <div class="lawyer__card-name">John Smith</div>
                          <span class="lawyer__card-place">{{$t('region.toshkent')}}</span>
                          <p class="lawyer__card-category">{{$t('lawyers.category')}} : <span>Korporativ yurist</span></p>
                          <span class="lawyer__card-rating">{{$t('lawyers.rating')}}: <span>4.0</span>
                          <vue-stars
                            class="vue__star"
                            name="rate"
                            active-color="#0028AA"
                            inactive-color="#282932"
                            shadow-color="##0028AA"
                            hover-color="#00aced"
                            :max="1"
                            :value="1"
                            :readonly="false"
                            char="★"
                          />
                          </span>
                          <div class="lawyer__card-success">{{$t('lawyers.success')}} <span class="lawyer__card-success-count">16</span></div>
                      </div>
                  </nuxt-link>
                      </b-col>
                    </b-row>                         
                  </div>
            </b-container>
              
          </div>           
        </div>
        <!-- /.lawyer__outer -->
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