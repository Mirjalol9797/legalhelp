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
            <span class="profile-info-name"
              >{{ $auth.user.first_name }} {{ $auth.user.last_name }}</span
            >
            <span class="profile-info-location">{{
              $auth.user.region.title_uz
            }}</span>
            <span class="profile-info-number">+998 {{ $auth.user.user }}</span>
            <span class="profile-info-email">{{ $auth.user.email }}</span>
          </div>
        </div>
        <div class="user__profile-card">
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab active> 
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'comment']" /> -->
                    <!-- <img src="../assets/images/profil/comment.svg" alt="" width="15px"> -->
                  </span>
                  <span class="user__profile-card-text">{{
                    $t("profile.myquestion")
                  }}</span>
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
                      <div class="left__block">
                        <span class="user">
                          <font-awesome-icon :icon="['fas', 'user']" /> 
                          Halimov Navruz
                        </span>
                        <span class="calendar">26.09.2020, 09:54</span>
                      </div>

                      <div class="right__block">
                        <div class="answer">
                          <font-awesome-icon :icon="['fas', 'comment']" />
                          Javoblar <span class="counter">11</span>
                        </div>
                        <span class="location"
                          ><font-awesome-icon
                            :icon="['fas', 'map-marker']"
                          />Buxoro</span
                        >
                      </div>


                    </div>
                  </div>
                </b-card-text>
              </b-tab>

              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'phone']" /> -->
                  </span>
                  <span class="user__profile-card-text">{{
                    $t("profile.phoneconsultate")
                  }}</span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  <a href="tel:+998946863999" class="user__profile-card-phone">
                    Biz bilan hoziroq bog'lanishingiz mumkin.
                    <br />Tel:
                    <span>+998946863999</span>
                  </a>
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
                      <span class="user__profile-documents-title">
                        0 Takliflar</span
                      >
                      <b-col lg="3">
                        <div class="user__profile-documents-price">
                          <b>190 000 so`m</b><span>savol <br />narxi</span>
                        </div>
                      </b-col>
                      <b-col lg="4"
                        ><div class="user__profile-documents-user">
                          <font-awesome-icon :icon="['fas', 'user']" /> Jismoniy
                          shaxs
                        </div>
                      </b-col>
                      <b-col lg="2"
                        ><b-button
                          type="button"
                          class="user__profile-documents-payment"
                          ><font-awesome-icon
                            :icon="['fas', 'credit-card']"
                            style="margin-right:5px;"
                          />To'lash</b-button
                        >
                      </b-col>
                      <b-col lg="2">
                        <b-button
                          type="button"
                          class="user__profile-documents-delete"
                          ><font-awesome-icon
                            :icon="['fas', 'trash']"
                            style="margin-right:5px;"
                          />O'chirish</b-button
                        ></b-col
                      >
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
                <b-card-text>Tab contents 1</b-card-text>
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
                          @submit.prevent="onSubmit"
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
                              <label for="user__profile-name">{{
                                $t("profile.name")
                              }}</label>
                              <input
                                type="text"
                                id="user__profile-name"
                                v-model="user.first_name"
                              />
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-surname">{{
                                $t("profile.surname")
                              }}</label>
                              <input
                                type="text"
                                id="user__profile-surname"
                                v-model="user.last_name"
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
                                v-model="user.email"
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
                                <option :value="region.id" v-for="(index,region) of selectuz" :key="region">{{index.title_uz}}</option>
                              </select>
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-number">{{
                                $t("profile.phone")
                              }}</label>
                              <input 
                                type="text"
                                id="user__profile-number"
                                v-model="user.user"
                              />
                              <input type="text" id="user__profile-code" >
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
      user: {
        first_name: "",
        last_name: "",
        email: "",
        region: ""
      },
      user: this.$auth.user
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
    async onSubmit() {
      await this.$axios
        .patch("customer/profile/", {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
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
