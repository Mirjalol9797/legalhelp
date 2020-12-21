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
                <b-card-text>
                  <CustomerQuestion />
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'comment']" /> -->
                    <!-- <img src="../assets/images/profil/comment.svg" alt="" width="15px"> -->
                  </span>
                  <span class="user__profile-card-text">Javobi kelgan savollar</span>
                  <!-- <font-awesome-icon :icon="['fas', 'angle-right']" /> -->
                </template>
                <b-card-text>
                  <CustomerQuesPriceDone />
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
                  <b-row class="user__favorite" v-if="loader">
                    <b-col md="6" class="user__favorite-item" v-for="item of lawyerFavorite.fav_lawyers" :key="item.id">
                      <div class="user__favorite-img">
                        <img :src="$store.state.mediaURL+item.image" :alt="item.first_name">
                      </div>
                      <div class="user__favorite-name">{{item.first_name}} {{item.last_name}} </div>
                    </b-col>
                  </b-row>
                  <div v-else>
                    <loading />
                  </div>  
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
                <b-card-text>
                  <CustomerDocument />
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-text">Javobi kelgan hujjatlarim</span>
                </template>
                <b-card-text>
                  <CustomerDocPriceDone />
                </b-card-text>
              </b-tab>              
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                  </span>
                  <span class="user__profile-card-text">{{$t("profile.notification")}}</span>
                </template>
                <b-card-text>
                  <CustomerDocumentPrice />
                  <CustomerPrice />
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <!-- <font-awesome-icon :icon="['fas', 'cogs']" /> -->
                  </span>
                  <span class="user__profile-card-text">{{$t("profile.setting")}}</span>
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
                              <div>Rasmingizni yuklang</div>
                              <label for="image">
                                <!-- <img
                                  src="../assets/images/avatar.png"
                                  alt
                                  class="avatar__image"
                                /> -->
                                <input
                                  type="file"
                                  placeholder="Faylni tanlash"
                                  id="image"
                                  class="avatar__input"
                                  @change="uploadImage"
                                />
                              </label>
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-name">{{$t("profile.name")}}</label>
                              <input
                                type="text"
                                id="user__profile-name"
                                v-model="user.first_name"
                              />
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-surname">{{$t("profile.surname")}}</label>
                              <input
                                type="text"
                                id="user__profile-surname"
                                v-model="user.last_name"
                              />
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-lang">{{$t("profile.lang")}}</label>
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
                              <label for="user__profile-city">{{$t("profile.city")}}</label>
                              <select
                                name
                                id="user__profile-city"
                                v-model="regionSelect"
                              >
                                <option
                                  v-for="(index, region) of selectuz"
                                  :key="region.id"
                                  :value="index.id"
                                  >
                                  {{ index.title_uz }}
                                  </option>
                              </select>
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-number">{{$t("profile.phone")}}</label>
                              <input
                                type="text"
                                id="user__profile-number"
                                :value="'+998 ' + user.user"
                                disabled
                              />
                            </b-col>
                            <b-col lg="12">
                              <b-button type="submit">
                              <font-awesome-icon
                                  :icon="['fas', 'save']"
                                  class="user__profile-submit-icon"
                                />
                              {{ $t("profile.save") }}
                              </b-button>
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
import CustomerQuestion from '../components/Customer-question'
import CustomerDocument from '../components/Customer-document'
import CustomerDocumentPrice from '../components/Customer-document-price'
import CustomerPrice from '../components/Customer-price'
import CustomerQuesPriceDone from '../components/Customer-ques-price-done'
import CustomerDocPriceDone from '../components/Customer-doc-price-done'
import Loading from '../components/Loading.vue'

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
      code: '',
      user: this.$auth.user,
      loader: false,
    };
  },
  components: {
    CustomerQuestion,
    CustomerPrice,
    CustomerDocument,
    CustomerDocumentPrice,
    CustomerQuesPriceDone,
    CustomerDocPriceDone,
    Loading
  },
  methods: {
    async onCancel() {
      this.$router.push(this.localePath({name: "/customer-profile"} ));
      this.$toast.error({
        title: `${this.$t("profile.save")}`,
        message: `${this.$t("profile.cancell")}`
      });
    },
    async getRegionuz() {
      await this.$axios.get("region/?language=uz").then(res => {
        this.selectuz = res.data;
        this.selected = res.data;
        // console.log('region', res);
      });
    },
    async getRegionru() {
      await this.$axios.get("region/?language=ru").then(res => {
        this.selectru = res.data;
      });
    },
    uploadImage(e) {
      this.user = new FormData();
      this.user.append('image', e.target.files[0]);
      this.user.append('region', this.regionSelect);
    },
    async onSubmit() {
      await this.$axios
        .patch("customer/profile/", this.user)
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
          this.loader = true;
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
    this.getDocumentCustomerPriceAdded()
    console.log('$auth.user', this.$auth.user)
  }
};
</script>

<style scoped>
</style>
