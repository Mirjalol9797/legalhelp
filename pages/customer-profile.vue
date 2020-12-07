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
            <span class="profile-info-location">
            <!-- {{
              $auth.user.region.title_uz
            }} -->
            </span>
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
                  <span class="user__profile-card-text">{{$t("profile.myquestion")}}</span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text v-for="item of questionCustomer" :key="item.id">
                  <div class="user__profile-question">
                    <nuxt-link class="user__profile-question-title" to="">
                      {{item.title}} 
                    </nuxt-link>
                    <p class="user__profile-question-text">
                      {{item.text}} 
                    </p>
                    <div class="user__profile-question-info">
                      <div class="left__block">
                        <!-- <span class="user">
                          <font-awesome-icon :icon="['fas', 'user']" />
                          Halimov Navruz
                        </span> -->
                        <span class="calendar">{{item.date}}</span>
                      </div>

                      <div class="right__block">
                        <div class="answer">
                          <font-awesome-icon :icon="['fas', 'comment']" />
                          Javoblar <span class="counter">1</span>
                        </div>
                        <div class="price" v-if="item.price > 0">
                          <font-awesome-icon :icon="['fas', 'money-bill-alt']" />
                          Savol narxi: {{item.price}}
                        </div>
                        <!-- <span class="location"><font-awesome-icon :icon="['fas', 'map-marker']"/>Buxoro</span> -->
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
                  </span>
                  <span class="user__profile-card-text">
                    Tanlagan yuristlar
                  </span>
                </template>
                <b-card-text>
                  <b-row class="user__favorite">
                    <b-col md="6" class="user__favorite-item" v-for="item of lawyerFavorite.fav_lawyers" :key="item.id">
                      <div class="user__favorite-img">
                        <img :src="$store.state.mediaURL+item.image" :alt="item.first_name">
                      </div>
                      <div class="user__favorite-name">{{item.first_name}} {{item.last_name}} </div>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-tab>              
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
                  </span>
                  <span class="user__profile-card-text">{{$t("profile.mydocuments")}}</span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text v-for="item of documentCustomer" :key="item.id" class="user__documentCustomer">
                  <!-- <div class="user__profile-documents">
                    <div class="user__profile-documents-header">
                      <span class="user__profile-documents-title">
                        0 Takliflar</span>
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
                        >
                          <font-awesome-icon
                            :icon="['fas', 'trash']"
                            style="margin-right:5px;"
                          />O'chirish</b-button>
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
                  </div> -->
                  <div class="user__documentCustomer-title">
                    <span>Hujjat nomi:</span>
                    <p>{{item.title}}</p>
                  </div>
                  <div class="user__documentCustomer-doc">
                    <span>Hujjat haqida qisqacha malumot:</span>
                    <p>{{item.text}}</p>
                  </div>
                  <a :href="item.doc_file" target="_blank" class="user__documentCustomer-dowland">hujjatni yuklab olish</a>
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
                  <div class="user__priceDocument">
                    <div class="user__priceDocument-title">Pulli hujjatlarim</div>
                    <b-row class="user__priceDocument-info" v-for="item of priceAddedDocument" :key="item.id">
                      <b-col sm="8" class="user__priceDocument-name">{{item.title}}</b-col>
                      <b-col sm="4" class="user__priceDocument-price">
                        {{item.price}} so'm
                        <nuxt-link to="" class="user__priceDocument-pay">To'lash</nuxt-link>
                      </b-col>
                    </b-row>
                  </div>
                  <div class="user__priceQuestion">
                    <div class="user__priceQuestion-title">Pulli savollarim</div>
                    <b-row class="user__priceQuestion-info" v-for="item of priceAddedQuestion" :key="item.id">
                      <p class="user__priceQuestion-name">{{item.title}}</p>
                      <p>{{item.price}} so'm</p>
                      <p>Savolga pull to'lash</p>
                      <b-form @submit.prevent="customerQuestionPrice">
                        <b-form-group
                          label="Karta raqamini kirgizing"
                          label-for="input"
                        >
                          <b-form-input
                            id="input"
                            type="text"
                            required
                            placeholder="8600123456789101"
                            v-model='form.card_number'
                          >
                          </b-form-input>
                        </b-form-group>
                        <b-form-group
                          label="Karta kunini kirgizing"
                          label-for="input1"
                        >
                          <b-form-input
                            id="input1"
                            type="text"
                            required
                            placeholder="12/20"
                            v-model="form.expire_date"
                          >
                          </b-form-input>
                        </b-form-group>   
                        <b-form-group>
                          <b-form-input
                            type="hidden"
                            v-model="form.object_id=item.id"
                            style="display:none"
                          >
                          </b-form-input>
                        </b-form-group>
                        <b-form-group>
                          <b-form-input
                            type="hidden"
                            v-model="form.object_type"
                            style="display:none"  
                          >
                          </b-form-input>
                        </b-form-group>
                        <b-form-group>
                          <b-form-input
                            type="text"
                            v-model="code" 
                            v-if="showCode"
                            placeholder="sms code"
                          >
                          </b-form-input>
                        </b-form-group>
                        <button type="submit">To'lash</button>                     
                      </b-form>
                    </b-row>
                  </div>
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
                                <option value="" disabled selected>
                                <!-- {{
                                  user.region.title_uz
                                }} -->
                                </option>
                                <option
                                  v-for="(index, region) of selectuz"
                                  :key="region.id"
                                  :value="index.id"
                                  >
                                  <!-- {{ index.title_uz }} -->
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
                                :value="'+998 ' + user.user"
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
                              <b-button type="button" @click="onCancel()"
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
              <!-- <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text">
                    To'lovlar
                  </span>
                </template>
                <b-card-text>
                  <h5 class="user__profile-card-payTitle">
                    Mening kartalarim:
                  </h5>
                  <hr />
                  <div class="user__profile-card-payItem mb-4">
                    <b-col cols="12">
                      <b-form>
                        <b-row>
                          <b-col md="8">
                            <b-form-group
                              label="Karta raqami"
                              label-for="input-1"
                            >
                              <b-form-input
                                id="input-1"
                                type="text"
                                required
                                placeholder="8600 **** **** ***"
                              >
                              </b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col md="4">
                            <b-form-group
                              label="Amal qilish muddati"
                              label-for="input-2"
                            >
                              <b-form-input
                                id="input-2"
                                type="text"
                                required
                                placeholder="12 / 10"
                              >
                              </b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col cols="12">
                            <b-button class="button-add card-button"
                              >Karta qo'shish</b-button
                            >
                            <b-button class="button-back card-button"
                              >Orqaga</b-button
                            >
                          </b-col>
                        </b-row>
                      </b-form>
                    </b-col>
                  </div>
                  <h5 class="user__profile-card-payTitle">To'lovlar tarixi</h5>
                  <hr />
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">№</th>
                        <th scope="col">Nomi</th>
                        <th scope="col">Sana</th>
                        <th scope="col">To'lov holati</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>8600 2222 3333 4444</td>
                        <td>27.10.2020</td>
                        <td>To'landi / To'lanmadi</td>
                      </tr>
                    </tbody>
                  </table>
                </b-card-text>
              </b-tab> -->
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
      questionCustomer: [],
      documentCustomer: '',
      lawyerFavorite: [],
      priceAddedDocument: [],
      priceAddedQuestion: [],
      showCode: false,
      user: {
        first_name: "",
        last_name: "",
        email: "",
        region: ""
      },
      form: {
        card_number: '',
        expire_date: '',
        object_type: 'question',
        object_id: '',
        token: ''
      },
      code: '',
      user: this.$auth.user
    };
  },
  methods: {
    async onCancel() {
      this.$router.push(this.localePath({name: "/"} ));
      this.$toast.error({
        title: `${this.$t("profile.save")}`,
        message: `${this.$t("profile.cancell")}`
      });
    },
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
    },
    async getQuestionCustomer() {
      await this.$axios.get('question/customer/')
        .then((res) => {
          this.questionCustomer = res.data;
          // console.log('getQuestionCustomer', res)
        })
    },
    async getDocumentCustomer() {
      await this.$axios.get('document/customer/')
        .then((res) => {
          this.documentCustomer = res.data;
          // console.log('getDocumentCustomer', res)
        })
    },
    async getLawyerFavorite() {
      await this.$axios.get(`customer/fav-list?language=${this.$i18n.locale}`)
        .then((res) => {
          this.lawyerFavorite = res.data;
          // console.log("getLawyerFavorite", res)
        })
    },
    async getDocumentCustomerPriceAdded() {
      await this.$axios.get('document/customer/?priceadded=1')
        .then((res) => {
          this.priceAddedDocument = res.data;
          // console.log('getDocumentCustomerPriceAdded', res)
        })
    },
    async getQuestionCustomerPriceAdded() {
      await this.$axios.get('question/customer/?priceadded=1') 
        .then((res) => {
          this.priceAddedQuestion = res.data;
          // console.log('getQuestionCustomerPriceAdded', res)
        })
    },
    async customerQuestionPrice() {
      await this.$axios.post(`payment/clickcardtoken/`, this.form) 
        .then((res) => {
          console.log('customerQuestionPrice', res) 
        })
    }
  },
  mounted() {
    this.getRegionuz(),
    this.getRegionru(),
    // console.log(this.$auth.user);
    this.getQuestionCustomer(),
    this.getDocumentCustomer(),
    this.getLawyerFavorite(),
    this.getDocumentCustomerPriceAdded(),
    this.getQuestionCustomerPriceAdded()
  }
};
</script>
