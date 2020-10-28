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
            </div>
            <form class="registration__form" @submit.prevent="onSubmit">
              <div class="language">
                <label for="language">{{ $t("askquestion.language") }}</label>
                <select name="" id="language" v-model="form.lang">
                  <option value="o'zbek">{{ $t("askquestion.uzb") }}</option>
                  <option value="Rus">{{ $t("askquestion.rus") }}</option>
                </select>
              </div>
              <div class="category">
                <label for="category">{{ $t("category.category") }}</label>
                <select name="" id="category" v-model="form.category">
                  <option value="" selected disabled
                    >Savol kategoriyasini tanlang</option
                  >
                  <option
                      v-for="(selectid, index) of category"
                    :key="index"
                    :value="selectid.id"
                    class="category__region-option"
                    >{{ selectid.name }}</option
                  >
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
                <b-button class="registration__btn" type="submit">{{
                  $t("givequestion.btn")
                }}</b-button>
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
      category: [],
      form: {
        lang: "",
        category: "",
        title: "",
        text: "",
        file: ""
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
    async getCategory() {
      await this.$axios.get("v1/document/category/").then(res => {
        this.category = res.data;
        console.log(res);
      });
    },
    onSubmit() {
   
    }
},
  mounted() {
    this.getCategory();
  }
};
</script>
