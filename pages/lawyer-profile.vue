<template>
  <div>
    <div class="profile-outer">
      <b-container>
        <div class="profile-inner">
          <div class="owner-pic">
            <img
              src="$store.state.baseURL + $auth.user.image"
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
                    <!-- <font-awesome-icon :icon="['fas', 'comment']" /> -->
                  </span>
                  <span class="user__profile-card-text">
                    {{$t("profile.myquestion")}}
                  </span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  <div class="user__profile-question" v-for="item of questionLawyer" :key="item.id">
                    <nuxt-link class="user__profile-question-title" to="">
                      Savol nomi: {{item.title}}
                    </nuxt-link>
                    <p class="user__profile-question-text">
                      Savol haqida qisqacha: {{item.text}}
                    </p>
                    <p class="user__profile-question-customer">
                      Savol bergan mijoz: {{item.customer}}
                    </p>
                    <p class="user__profile-question-date">
                      Savol berilgan sana: {{item.date}}
                    </p>
                    <p class="user__profile-question-price" v-if="item.is_paid == true">
                      Savolda quyilgan narx: {{item.price}}
                    </p>
                    <b-form 
                      class="lawyer__form" 
                      @submit.prevent="pathPriceQuestionLawyer(item.id)"
                      v-if="item.is_paid == false"
                    >
                      <b-form-group
                        label="Savolga narx kirgizing"
                        label-for="input"
                      >
                        <b-form-input
                          id="input"
                          type="text"
                          v-model="priceQuestion"
                          required
                        ></b-form-input>
                      </b-form-group> 
                      <b-button type="submit" variant="primary">Saqlamoq</b-button>                     
                      <div :class="{active: isActiveQuestion}" class="lawyer__documents-form-text">
                        Narx quyildi. Iltimos mijoz adabrit qilishini kuting. <br>
                        Mijoz adobrit kigandan so'ng? mijoz tomondan berilgan savol "Bildirishnomalrda" chiqadi
                      </div>                        
                    </b-form>
                    <!-- <div class="user__profile-question-info">
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
                    </div> -->
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text">{{$t("profile.mydocuments")}}</span>
                </template>
                <b-card-text>
                  <div class="lawyer__documents">
                    <div class="lawyer__documents_item" v-for="item in documentLawyer" :key="item.id">
                      <div class="lawyer__documents-title">Hujjat nomi: {{item.title}}</div>
                      <div class="lawyer__documents-desc">Hujjat haqida: {{item.text}}</div>
                      <div class="lawyer__documents-categ">Hujjat toifasi: {{item.category}}</div>
                      <div class="lawyer__documents-subcateg">Hujjat pastki toifasi: {{item.sub_category}}</div>
                      <div class="lawyer__documents-link">
                        <a :href="item.doc_file" target="_blank">Hujjat yuklab olish</a>
                      </div>
                      <div class="lawyer__documents-customer">Hujjat buyirgan mijoz: {{item.customer}}</div>
                      <div class="lawyer__documents-date">Hujjat buyirilgan sana: {{item.date}}</div>
                      <div class="lawyer__documents-price"  v-if="item.is_paid == true">Hujjat quyilgan narx: {{item.price}}</div>
                      <b-form 
                        class="lawyer__documents-form"
                        @submit.prevent="patchPriceDocumentLawyer(item.id)"
                        v-if="item.is_paid == false"
                      >
                        <b-form-group
                          label="Hujjatga narx kirgizing"
                          label-for="input"
                        >
                          <b-form-input
                            id="input"
                            type="text"
                            v-model="priceDocument"
                            required
                          ></b-form-input>
                        </b-form-group> 
                        <b-button type="submit" variant="primary">Saqlash</b-button>                     
                        <div :class="{active: isActiveDocument}" class="lawyer__documents-form-text">
                          Narx quyildi. Iltimos mijoz adabrit qilishini kuting. <br>
                          Mijoz adobrit kigandan so'ng? mijoz tomondan berilgan savol "Bildirishnomalrda" chiqadi
                        </div>     
                      </b-form>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text">{{$t("profile.notification")}}</span>
                </template>
                <b-card-text>
                  <div class="lawyer__questions">
                    <h2>Puli to'langan savollar</h2>
                    <div class="lawyer__questions_item" v-for="item in priceAddedQuestion" :key="item.id">
                      <div class="lawyer__questions-title">Savol nomi: {{item.title}}</div>
                      <div class="lawyer__questions-text">Savol haqida: {{item.text}}</div>
                      <div class="lawyer__questions-customer">Savol bergan mijoz: {{item.customer}}</div>
                      <div class="lawyer__questions-date">Savol berilgan sana: {{item.date}}</div>
                      <div class="lawyer__questions-price">Savolga quyilgan narx: {{item.price}}</div>
                    </div>
                  </div>
                  <div class="lawyer__documents">
                    <h2>Puli to'langan hujjatlar</h2>
                    <div class="lawyer__documents_item" v-for="item in priceAddedDocumnet" :key="item.id">
                      <div class="lawyer__documents-title">Hujjat nomi: {{item.title}}</div>
                      <div class="lawyer__documents-desc">Hujjat haqida: {{item.text}}</div>
                      <div class="lawyer__documents-categ">Hujjat toifasi: {{item.category}}</div>
                      <div class="lawyer__documents-subcateg">Hujjat pastki toifasi: {{item.sub_category}}</div>
                      <div class="lawyer__documents-link">
                        <a :href="item.doc_file" target="_blank">Hujjat yuklab olish</a>
                      </div>
                      <div class="lawyer__documents-customer">Hujjat buyirgan mijoz: {{item.customer}}</div>
                      <div class="lawyer__documents-date">Hujjat buyirilgan sana: {{item.date}}</div>    
                      <div class="lawyer__documents-price">Quyilgan narx: {{item.price}}</div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <!-- <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text">Hujjatlar arxivi </span>
                </template>
                <b-card-text>
                  Hujjatlar arxivi
                </b-card-text>
              </b-tab>   -->
              <!-- <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text">Savollar arxivi</span>
                </template>
                <b-card-text>
                  Savollar arxivi
                </b-card-text>
              </b-tab>    -->
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text"> Maqolalarim</span>
                </template>
                <b-card-text>
                  Maqolalarim
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
      questionLawyer: [],
      documentLawyer: [],
      priceAddedQuestion: [],
      priceAddedDocumnet: [],
      priceDocument: '',
      priceQuestion: '',
      isActiveDocument: false,
      isActiveQuestion: false,
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
          console.log('getDocumentLawyer', res)
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
          console.log('patchPriceDocumentLawyer', res)
          this.isActiveDocument = true
        })
    },
    async pathPriceQuestionLawyer(id) {
      await this.$axios.patch(`question/lawyer/${id}/`, {
        price: this.priceQuestion
      })
        .then((res) => {
          console.log('pathPriceQuestionLawyer', res)
          this.isActiveQuestion = true
        })
    }
  },
  mounted() {
    this.getRegionuz();
    this.getRegionru();
    // console.log(this.$auth.user);
    this.getQuestionLawyer();
    this.getDocumentLawyer();
    this.getQuestionLawyerPriceAdded();
    this.getDocumentLawyerPriceAdded();
  }
};
</script>
