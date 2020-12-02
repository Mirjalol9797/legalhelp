<template>
  <div>
    <div class="lawyer-profile-wrapper">
      <b-container>
        <div class="lawyer-profile">
          <b-row>
            <b-col lg="4" md="12">
              <div class="lawyer-image-wrapper">
                <img
                  :src="lawyerItem.image"
                  height="258"
                  width="258"
                  alt
                />
                <div class="lawyer-profile-rank">
                  <vue-stars
                    class="lawyer-profile__star"
                    name="rate"
                    active-color="#FFC805"
                    inactive-color="#282932"
                    shadow-color="#FFC805"
                    hover-color="#00aced"
                    :max="lawyerItem.rate"
                    :value="3"
                    :readonly="false"
                    char="★"
                  />
                </div>
                <div class="btn-group shadow rounded-circle cost__lawyer-work">
                  <button class="btn btn-sm btn-primary btn-circle btn-icon">
                    <span class="btn-inner--icon">
                      <font-awesome-icon :icon="['fas', 'credit-card']" />
                    </span>
                    <span class="btn-inner--text">Xizmat narxi:</span>
                  </button>

                  <button class="btn btn-sm btn-dark btn-circle">
                    {{lawyerItem.service_price}} so`mdan
                  </button>
                </div>
              </div>
            </b-col>
            <b-col lg="4" md="12">
              <div class="profile-info">
                <span class="profile-info-name">{{lawyerItem.first_name}}  {{lawyerItem.last_name}}</span>
                <span class="profile-info-location">{{lawyerItem.region}}</span>
                <span class="profile-info-number">90 999 00 00</span>
                <!-- <span class="profile-info-email">{{$auth.user.email}}</span> -->
                <span class="profile-info-email">email@mail.ur</span>
              </div>
            </b-col>
            <b-col lg="4" md="12">
              <div class="lawyer-profile-text">
                {{lawyerItem.description}}
              </div>
            </b-col>
          </b-row>
          <!-- <b-card no-body class="lawyer__tabs">
            <b-tabs pills card vertical>
              <b-tab active>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'list-ul']" />
                  </span>
                  <span class="user__profile-card-text">Maqolalar <font-awesome-icon :icon="['fas', 'angle-right']" class="lawyer__tabs-right" /></span>
                  
                </template>
                <b-card-text> </b-card-text>
              </b-tab>

              <b-tab >
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'comment']" />
                  </span>
                  <span class="user__profile-card-text">Javoblari<font-awesome-icon class="lawyer__tabs-right" :icon="['fas', 'angle-right']" /></span>
                  
                </template>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card> -->
          <b-row class="mt-5">
            <b-col lg="6">
              <div class="degree-wrapper">
                <div class="degree">Ilmiy darajasi</div>
                <div class="graduated">
                  {{lawyerItem.university}}
                </div>
              </div>
            </b-col>
            <b-col lg="6">
              <div class="activity-wrapper">
                <div class="activity-header">Ish faoliyati</div>
                <div class="activity">
                  {{lawyerItem.current_work}}
                </div>
              </div>
            </b-col>
            <b-col lg="6">
              <div class="filed-work">
                <div class="field-work-header">Huquq sohasi</div>
                <span class="btn mb-2 p-2 pl-3 pr-3 mr-3 s-span-style" v-for="(service,index) of lawyerItem.services" :key="index.id">
                  <font-awesome-icon :icon="['fas', 'home']" />
                  <!-- Fuqarolik huquqi (umumiy masalalar) -->
                  {{service}}
                </span>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lawyerItem: []
    }
  },
  methods: {
    async getLawyersItem() {
      await this.$axios.get(`lawyer/list-search/${this.$route.params.id}/`)
        .then((res) => {
          this.lawyerItem = res.data;
          console.log('123123131', res.data)
        })
        .catch(() => {
          
        })
    }
  },
  mounted() {
    this.getLawyersItem()
  }
}
</script>