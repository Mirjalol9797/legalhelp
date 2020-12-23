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
                  </span>
                  <span class="user__profile-card-text">
                    {{$t("profile.myquestion")}}
                  </span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  <LawyerAnswer />
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text">{{$t("profile.mydocuments")}}</span>
                </template>
                <b-card-text>
                  <lawyerDocument />
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text">{{$t("profile.notification")}}</span>
                </template>
                <b-card-text>
                  <LAwyerPriceAnswer />
                  <LawyerPriceDocument />
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text"> Maqolalarim</span>
                </template>
                <b-card-text>
                  Maqola yozish uchun iltimos adminga murojat qiling
                </b-card-text>
              </b-tab>                                        
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text">{{$t("profile.setting")}}</span>
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
                              <!-- <p>{{ $t("profile.img") }}</p> -->
                              <div>Rasm yuklash</div>
                              <label for="image">
                                
                                <input
                                  type="file"
                                  placeholder="Faylni tanlash"
                                  id="image"
                                  ref="file"
                                  class="avatar__input"
                                  @change="updateImage"
                                />    
                              </label>
                              <b-progress :value="value" :max="max" show-progress animated :class="{progressBlock: progressActive}"></b-progress>
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
                            <!-- <b-col lg="6">
                              <label for="user__profile-lang">{{
                                $t("profile.lang")
                              }}</label>
                              <select name id="select__user-lang" v-model="lawyer.language">
                                <option value="1">O'zbek</option>
                                <option value="2">Rus</option>
                              </select>
                            </b-col> -->
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
                                v-model="lawyer.region.id"
                              >
                                <option 
                                  :value="region.id" 
                                  v-for="(index,region) of selectuz" 
                                  :key="region"
                                >
                                  {{index.title_uz}}
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
                                v-model="lawyer.phone_number"
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
import LawyerAnswer from "../components/Lawyer-answer"
import lawyerDocument from "../components/Lawyer-document"
import LAwyerPriceAnswer from "../components/Lawyer-price-answer"
import LawyerPriceDocument from "../components/Lawyer-price-document"
export default {
  data() {
    return {
      value: 0,
      max: 100,
      progressActive: false,
      selectuz: [],
      selectru: [],
      // questionLawyer: [],
      documentLawyer: [],
      priceAddedQuestion: [],
      priceAddedDocumnet: [],
      priceDocument: '',
      priceQuestion: '',
      isActiveDocument: false,
      isActiveQuestion: false,

      lawyer: {
        first_name: this.$auth.user.first_name,
        last_name: this.$auth.user.last_name,
        email: this.$auth.user.email,
        image: this.$auth.user.image,
        // language: "",
        region: this.$auth.user.region && this.$auth.user.region.id,
        phone_number: this.$auth.user.user
      },
    };
  },
  components: {
    LawyerAnswer,
    lawyerDocument,
    LAwyerPriceAnswer,
    LawyerPriceDocument
  },
  methods: {
    async getRegionuz() { 
      await this.$axios.get("region/?language=uz").then(res => {
        this.selectuz = res.data;
        this.selected = res.data;
        // console.log('getRegionuz', res);
      });
    },
    async getRegionru() {
      await this.$axios.get("region/?language=ru").then(res => {
        this.selectru = res.data;
      });
    },
    async updateImage(e) {
      let image = new FormData();
      image.append('image', e.target.files[0]);
      this.value = 80;
      this.progressActive = true;
      await this.$axios.post('lawyer/custom-image/', image)
      .then(res => {
        this.lawyer.image = res.data.image;
        this.value = this.max;
        this.progressActive = false;
      })
    },
    async onSubmitLawyer() {
      await this.$axios
        .patch("lawyer/profile/", this.lawyer)
        .then(res => {
        this.$toast.success({
              title: `${this.$t("toast.success")}`,
              message: `${this.$t("toast.updateProfile")}`
            });
            this.$auth.fetchUser();
        })
        .catch(err => {
          console.log(err);
          this.$toast.error({
              title: `${this.$t("toast.loginError")}`,
              message: `${this.$t("toast.updateProfileError")}`
            });
        });
    },
    // mywork
    async getQuestionLawyer() {
      await this.$axios.get('question/lawyer/')
        .then((res) => {
          this.questionLawyer = res.data;
          // console.log('getQuestionLawyer', res)
        })
    },
    async getDocumentLawyer() {
      await this.$axios.get('document/lawyer/')
        .then((res) => {
          this.documentLawyer = res.data;
          // console.log('getDocumentLawyer', res)
        })
    },
    async getQuestionLawyerPriceAdded() {
      await this.$axios.get('question/lawyer/?is_paid=1')
        .then((res) => {
          this.priceAddedQuestion = res.data;
          // console.log('getQuestionLawyerPriceAdded', res)
        })
    },
    async getDocumentLawyerPriceAdded() {
      await this.$axios.get('document/lawyer/?paymentdone=1') 
        .then((res) => {
          this.priceAddedDocumnet = res.data;
          // console.log('getDocumentLawyerPriceAdded', res)
        })
    },
    async patchPriceDocumentLawyer(id) {
      await this.$axios.patch(`document/lawyer/${id}/`, {
        price: this.priceDocument
      })
        .then((res) => {
          // console.log('patchPriceDocumentLawyer', res)
          this.isActiveDocument = true
        })
    },
    async pathPriceQuestionLawyer(id) {
      await this.$axios.patch(`question/lawyer/${id}/`, {
        price: this.priceQuestion
      })
        .then((res) => {
          // console.log('pathPriceQuestionLawyer', res)
          this.isActiveQuestion = true
        })
    }
  },
  mounted() {
    this.getRegionuz();
    this.getRegionru();
    this.getQuestionLawyer();
    this.getDocumentLawyer();
    this.getQuestionLawyerPriceAdded();
    this.getDocumentLawyerPriceAdded();

  }
};
</script>
