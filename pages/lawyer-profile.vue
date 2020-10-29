<template>
  <div>
    <div class="profile-outer">
      <b-container>
        <div class="profile-inner">
          <div class="owner-pic">
            <img
              :src="$store.state.mediaURL + $auth.user.image"
              height="170"
              width="264"
              alt
            />
          </div>
          <div class="profile-info">
            <span class="profile-info-name">
              {{ $auth.user.first_name }} {{ $auth.user.last_name }}
            </span>
            <span class="profile-info-location">
            <!-- {{
              $auth.user.region.title_uz
            }} -->
            </span>
            <span class="profile-info-number">+998 {{ $auth.user.user }}</span>
            <span class="profile-info-email">{{ $auth.user.email }}</span>
          </div>
        </div>
        <div class="user__profile-card lawyer-profile__card">
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab active>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'comment']" /> -->
                  </span>
                  <span class="user__profile-card-text">
                    {{$t("profile.myquestion")}}
                  </span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  <div class="user__profile-question">
                    <nuxt-link class="user__profile-question-title" to="">
                      Vitae enim quae Nam
                    </nuxt-link>
                    <p class="user__profile-question-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus, facilis esse! Non, magni harum quam vero ut
                      corporis recusandae perferendis assumenda tempora
                      blanditiis a quidem nostrum voluptas quo minus suscipit!
                    </p>
                    <div class="user__profile-question-info">
                      <div class="answer">
                        <font-awesome-icon :icon="['fas', 'comment']" />
                        Javoblar <span class="counter">11</span>
                      </div>
                      <span class="user"
                        ><font-awesome-icon :icon="['fas', 'user']" /> Halimov
                        Navruz</span
                      >
                      <span class="calendar">26.09.2020, 09:54</span>
                      <span class="location"
                        ><font-awesome-icon
                          :icon="['fas', 'map-marker']"
                        />Buxoro</span
                      >
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
                  </span>
                  <span class="user__profile-card-text">{{
                    $t("profile.mydocuments")
                  }}</span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  <div class="user__profile-documents">
                    <div class="user__profile-documents-header">
                      <b-col lg="4" class="mx-auto">
                        <div class="user__profile-documents-user">
                          <font-awesome-icon :icon="['fas', 'user']" /> 
                          Jismoniy shaxs
                        </div>
                      </b-col>
                    </div>
                  </div>
                  <div class="user__profile-documents-info">
                    <div class="title">
                      DAN xodimi harakati yuzasidan shikoyat
                    </div>
                    <span class="calendar">12:54, 26.09.2020</span>
                    <div class="text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, natus!
                    </div>
                  </div>
                  <div class="user__profile-documents-category">
                    <div class="filed-work">
                      <div class="field-work-header">Huquq sohasi</div>
                      <span class="btn mb-2 p-2 pl-3 pr-3 mr-3 s-span-style ">
                        <font-awesome-icon :icon="['fas', 'home']" />
                        Fuqarolik huquqi (umumiy masalalar)
                      </span>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'bell']" /> -->
                  </span>
                  <span class="user__profile-card-text">{{
                    $t("profile.notification")
                  }}</span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  <b-row>
                    <b-col lg="4">
                      <nuxt-link :to="localePath('/lawyer-profile')" class="">Puli tulangan hujjatlar</nuxt-link>
                    </b-col>
                    <b-col lg="4">
                      <nuxt-link :to="localePath('/lawyer-profile')" class="">Puli tulangan savollar</nuxt-link>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'bell']" /> -->
                  </span>
                  <span class="user__profile-card-text">
                  <!-- {{
                    $t("profile.notification")
                  }} --> Hujjatlar arxivi 
                  </span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  Hujjatlar arxivi
                </b-card-text>
              </b-tab>  
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'bell']" /> -->
                  </span>
                  <span class="user__profile-card-text">
                  <!-- {{
                    $t("profile.notification")
                  }} --> Savollar arxivi
                  </span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  Savollar arxivi
                </b-card-text>
              </b-tab>   
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'bell']" /> -->
                  </span>
                  <span class="user__profile-card-text">
                  <!-- {{
                    $t("profile.notification")
                  }} --> Maqolalarim
                  </span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  Maqolalarim
                </b-card-text>
              </b-tab>                                        
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'cogs']" /> -->
                  </span>
                  <span class="user__profile-card-text">{{
                    $t("profile.setting")
                  }}</span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  <div class="user__profile-card-info">
                    <b-row>
                      <b-col md="12">
                        <form
                          @submit.prevent="onSubmitLawyer"
                          class="user__profile-form"
                        >
                          <b-row>
                            <b-col md="12">
                              <p>{{ $t("profile.img") }}</p>
                              <label for="image">
                                <img
                                  src="../assets/images/avatar.png"
                                  alt
                                  class="avatar__image"
                                />
                                <input
                                  type="file"
                                  placeholder="Faylni tanlash"
                                  id="image"
                                  class="avatar__input"
                                />
                              </label>
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-name">
                              {{
                                $t("profile.name")
                              }}</label>
                              <input
                                type="text"
                                id="user__profile-name"
                                v-model="lawyer.first_name"
                              />
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-surname">{{
                                $t("profile.surname")
                              }}</label>
                              <input
                                type="text"
                                id="user__profile-surname"
                                v-model="lawyer.last_name"
                              />
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-lang">{{
                                $t("profile.lang")
                              }}</label>
                              <select name id="select__user-lang">
                                <option value="1">O'zbek</option>
                                <option value="2">Rus</option>
                              </select>
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-email">Email</label>
                              <input
                                type="email"
                                id="user__profile-email"
                                v-model="lawyer.email"
                              />
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-city">{{
                                $t("profile.city")
                              }}</label>
                              <select
                                name
                                id="user__profile-city"
                                v-model="regionSelect"
                              >
                                <option 
                                  :value="region.id" 
                                  v-for="(index,region) of selectuz" 
                                  :key="region"
                                >
                                  <!-- {{index.title_uz}} -->
                                </option>
                              </select>
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-number">{{
                                $t("profile.phone")
                              }}</label>
                              <input
                                type="text"
                                id="user__profile-number"
                                :value="'+998 ' + lawyer.user"
                                disabled
                              />
                            </b-col>                            
                            <b-col lg="12">
                              <b-button type="submit"
                                ><font-awesome-icon
                                  :icon="['fas', 'save']"
                                  class="user__profile-submit-icon"
                                />{{ $t("profile.save") }}</b-button
                              >
                              <b-button type="button" :to="localePath('/')"
                                ><font-awesome-icon
                                  :icon="['fas', 'times']"
                                  class="user__profile-submit-icon"
                                />{{ $t("profile.cancel") }}</b-button
                              >
                            </b-col>
                          </b-row>
                        </form>
                      </b-col>
                    </b-row>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      regionSelect: "",
      selectuz: [],
      selectru: [],
      lawyer: {
        first_name: "",
        last_name: "",
        email: "",
        region: ""
      },
      lawyer: this.$auth.user,
    };
  },
  methods: {
    async getRegionuz() {
      await this.$axios.get("region/?language=uz").then(res => {
        this.selectuz = res.data;
        this.selected = res.data;
        console.log(res);
      });
    },
    async getRegionru() {
      await this.$axios.get("region/?language=ru").then(res => {
        this.selectru = res.data;
      });
    },
    async onSubmitLawyer() {
      await this.$axios
        .patch("lawyer/profile/", {
          first_name: this.lawyer.first_name,
          last_name: this.lawyer.last_name,
          email: this.lawyer.email,
          region: this.regionSelect
          // image:this.user.image
        })
        .then(res => {
        this.$toast.success({
              title: `${this.$t("toast.success")}`,
              message: `${this.$t("toast.updateProfile")}`
            });
        })
        .catch(err => {
          console.log(err);
          this.$toast.error({
              title: `${this.$t("toast.loginError")}`,
              message: `${this.$t("toast.updateProfileError")}`
            });
        });
    }
  },
  mounted() {
    this.getRegionuz();
    this.getRegionru();
    console.log(this.$auth.user);
  }
};
</script>
