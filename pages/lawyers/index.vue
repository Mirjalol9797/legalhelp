<template>
    <div>
      <div v-if="!$store.state.showLoader" class="lawyer__outer">
        <div class="lawyer__outer-inner">
          <b-container>
            <h1 class="lawyer__outer-heading">{{$t('lawyers.lawyers')}}</h1>
            <div class="lawyer__list-search">
              <b-row>
                <b-col lg="12" xl="4" class="lawyer__list-search-category">
                <select v-model="service_id" id="category" @focus="getFilterCategory()">
                  <option :selected="service_id" disabled>Xizmat turi bo'yicha saralash</option>
                  <option v-for="item in filterCategory" :key="item.id" :value="item.id">
                    {{ item.title_uz }}
                  </option>
                </select>
                </b-col>
                <b-col lg="12" xl="3" class="lawyer__list-search-region">
                <select v-model="region_id" id="region-select">
                  <option :selected="region_id" disabled>Viloyat bo'yicha saralash</option>
                  <option v-for="item in filterRegion" :key="item.id" :value="item.id">
                    {{ item.title_uz }}
                  </option>
                </select>
                </b-col>
                <b-col lg="12" xl="3" class="lawyer__list-search-rating">
                <select v-model="rate_id" name="rating" id="rating">
                  <option :selected="rate_id" disabled>Reyting bo'yicha saralash</option>
                  <option value="0" selected>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                </b-col>
                <b-col lg="12" xl="2" class="lawyer__list-search-btn pr-0">
                  <button @click="getFilter(service_id,region_id,rate_id)" class="btn btn-info">{{ $t('search.search') }}</button>
                </b-col>
              </b-row>
            </div>
            <b-alert v-if="isShow" show variant="danger">Bunday ma'lumotli yurist yo'q</b-alert>
            <div class="lawyer__outer-list">
              <b-row data-aos="fade-up" data-aos-duration="500">
                <b-col md="6" lg="4" xl="3" class="mb-5" v-for="lawyer in filterCategoryName" :key="lawyer.id" >
                <nuxt-link :to="localePath('/lawyers/'+lawyer.id)" class="">
                  <div class="lawyer__card-img">
                      <img :src="$store.state.mediaURL + lawyer.image" alt="">
                  </div>
                </nuxt-link>
                  <div class="lawyer__card-info text-center">
                    <nuxt-link :to="localePath('/lawyers/'+lawyer.id)" class="">
                      <div class="lawyer__card-name">{{lawyer.first_name}} {{lawyer.last_name}}</div>
                    </nuxt-link>
                    <span class="lawyer__card-place">{{ lawyer.region }}</span>
                    <p class="lawyer__card-category">{{$t('lawyers.category')}} :
                      <span v-for="service of lawyer.services" :key="service.id">
                        {{service}} <br>
                      </span>
                    </p>
                    <span class="lawyer__card-rating">{{$t('lawyers.rating')}}: <span>{{lawyer.rate}}</span>
                    <vue-stars
                      class="vue__star"
                      name="rate"
                      active-color="#0028AA"
                      inactive-color="#282932"
                      shadow-color="##0028AA"
                      hover-color="#00aced"
                      :max="lawyer.rate"
                      :value="1"
                      :readonly="false"
                      char="★"
                    />
                    </span>
                    <div class="lawyer__card-fav">
                      <div class="lawyer__card-fav-img" :class="{active: isActive}" @click="like(lawyer.id)"></div>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-container>
        </div>
      </div>
      <div v-else>
        <loading /> 
      </div>        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loading from '../../components/Loading.vue';
export default {
  data() {
    return {
        rows: 100,
        perPage: 1,
        currentPage: 1,
        isActive: false,
        isShow: false,
        filterCategory: [],
        filterRegion: [],
        filter: [],
        service_id: 'Xizmat turi bo\'yicha saralash',
        region_id: 'Viloyat bo\'yicha saralash',
        rate_id: 'Reyting bo\'yicha saralash',
    };
  },
  components: {
    Loading
  },
  methods: {
    async like(id){
      await this.$axios.post(`customer/fav/?lawyer_id=${id}`)
        .then(res => {
          // console.log('customerFav111', this.res)
          this.isActive = !this.isActive
        })
        .catch(err => {
          console.log(err)
        })

    },
    async getFilterCategory() {
        await this.$axios.get('lawyer/services/?language=uz')
            .then(res => this.filterCategory = res.data)
    },
    async getFilterRegion() {
        await this.$axios.get('region/?language=uz')
            .then(res => this.filterRegion = res.data)
    },
    async getFilter(service_id,region_id,rate_id) {
        this.service_id = service_id;
        this.region_id = region_id;
        this.rate_id = rate_id;
        await this.$axios.get(`lawyer/list-search/?service_id=${service_id}&rate=${rate_id}&region_id=${region_id}`)
            .then((res) => {
                console.log('RES',res);
                this.filter = res.data;
                this.service_id = 'Xizmat turi bo\'yicha saralash';
                this.region_id = 'Viloyat bo\'yicha saralash';
                this.rate_id = 'Reyting bo\'yicha saralash';
            });
        if (this.filter.length === 0) {
            this.isShow = true;
        } else {
            return this.lawyers;
        }
    }
  },

  computed: {
      ...mapGetters({
          lawyers: 'lawyers'
      }),
      filterCategoryName: function () {
          if (this.filter.length > 0) {
              return this.filter;
          } else if (this.filter.length === 0) {
              return this.lawyers;
          } else {
              this.isShow = true;
          }
      }
  },
  created() {
      this.$store.commit('setShowLoader', true);
      this.getFilterCategory();
      this.getFilterRegion();
      this.$store.dispatch('getLawyers')
      .then(() => {
        this.$store.commit('setShowLoader', false)
      })      ;
      console.log(this.lawyers)
      
  }
};
</script>
<style lang="scss">
  #app {
    margin: 30px;
  .form-group {
    display: flex;
    align-items: center;
  label {
    font-weight: bold;
    color: #337ab7;
    margin-right: 20px;
  }
  }

  .filters {
    margin-bottom: 20px;
    display: flex;
    width: 700px;
    justify-content: space-around;
  }

  .table {
    width: 700px;
  thead tr td {
    font-weight: bold;
    color: #337ab7;
  }
  }
  }

</style>
