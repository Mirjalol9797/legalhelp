<template>
  <div>
    <div class="registration__wrapper">
      <b-container>
        <div class="registration">
          <div class="registration__inner">
            <div class="registration__header">
              <nuxt-link :to="localePath('/')" class="registration__arrow-link">
                <img src="../../assets/images/registration/left-arrow.svg" />
              </nuxt-link>
              <!-- <span class="step__page-number">1/4</span> -->
            </div>
            <form class="registration__form" @submit.prevent="onSubmit">
              <!-- <div class="name">
                <label for="name">{{ $t("askquestion.name") }}</label>
                <input type="text" id="name" v-model="form.name" />
              </div> -->
              <!-- <div class="surname">
                <label for="surname">{{ $t("askquestion.surname") }}</label>
                <input type="text" id="surname" v-model="form.surname" />
              </div> -->
              <!-- <div class="city">
                <label for="city">{{ $t("askquestion.city") }}</label>
                <input type="text" id="city" v-model="form.city" />
              </div> -->
              <!-- <div class="phone__number">
                <label for="phone">{{ $t("askquestion.number") }}</label>
                <div class="input__tel-wrapper">
                  <span class="tel__code">+998</span>
                  <input type="tel" id="phone" v-model="form.phone_number" />
                </div>
              </div> -->
              <div class="language">
                <label for="language">{{ $t("askquestion.language") }}</label>
                <select name="" id="language" v-model="form.lang">
                  <option value="o'zbek">{{ $t("askquestion.uzb") }}</option>
                  <option value="Rus">{{ $t("askquestion.rus") }}</option>
                  <option value="Ingliz">{{ $t("askquestion.eng") }}</option>
                </select>
              </div>
              <div class="category">
                <label for="category">{{ $t("category.category") }}</label>
                <select name="" id="category" v-model="form.category">
                  <option value="0" disabled selected>{{
                    $t("category.typequestion")
                  }}</option>
                  <option value="1">{{ $t("category.civillaw") }}</option>
                  <option value="2">{{ $t("category.work") }}</option>
                  <option value="3">{{ $t("category.citizenship") }}</option>
                  <option value="4">{{ $t("category.education") }}</option>
                  <option value="5">{{ $t("category.entrepreneur") }}</option>
                  <option value="6">{{
                    $t("category.governmentservice")
                  }}</option>
                  <option value="7">{{
                    $t("category.familyrelations")
                  }}</option>
                  <option value="8">{{ $t("category.healthcare") }}</option>
                  <option value="9">{{ $t("category.criminallaw") }}</option>
                  <option value="10">{{ $t("category.court") }}</option>
                  <option value="11">{{ $t("category.tax") }}</option>
                  <option value="12">{{
                    $t("category.transportation")
                  }}</option>
                  <option value="13">{{ $t("category.agriculture") }}</option>
                  <option value="14">{{ $t("category.communal") }}</option>
                  <option value="15">{{
                    $t("category.socialprotection")
                  }}</option>
                  <option value="16">{{ $t("category.place") }}</option>
                  <option value="17">{{ $t("category.bank") }}</option>
                  <option value="18">{{ $t("category.consumer") }}</option>
                  <option value="19">{{ $t("category.heritage") }}</option>
                </select>
              </div>
              <div class="question__title">
                <label for="question__title">{{
                  $t("givequestion.title")
                }}</label>
                <input type="text" id="question__title" v-model="form.title" />
              </div>
              <div class="question__text">
                <label for="question__text">{{
                  $t("givequestion.text")
                }}</label>
                <textarea
                  name=""
                  id="question__text"
                  v-model="form.text"
                ></textarea>
              </div>
              <div class="file">
                <label for="file__input">{{ $t("givequestion.file") }}</label>
                <input
                  @change="fileUpload"
                  type="file"
                  accept="image/*,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  value="Upload file"
                  class="file__input"
                />
              </div>
              <div class="registration__button-wrap">
                <b-button
                  class="registration__btn"
                  type="submit"
                  >{{ $t("givequestion.btn") }}</b-button
                >
              </div>
            </form>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        lang: "",
        category: "",
        title: "",
        text: "",
        file: "",
      }
    };
  },
  methods: {
    fileUpload(event) {
      let e = event.target.files[0];
      if (e.type == "image/jpeg") {
        this.form.file = e;
      } else {
        console.log("wrong type");
      }
    },
    onSubmit() {
        this.$store.dispatch("sendQuestion", this.form);
    },
  },
     
};
</script>
