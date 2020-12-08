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
            <form @submit.prevent="postQuestionCustomer" class="reg-form">
              <div class="reg-form__item">
                <label for="lang">Til</label>
                <select id="lang" v-model="language">
                  <option>o'zbek</option>
                  <option>rus</option>
                </select>
              </div>
              <div class="reg-form__item">
                <label for="select">Categoriya</label>
                <select id="select" v-model="category">
                  <option
                    v-for="item in categories"
                    :key="item.id"
                    :value="item.id" >
                  {{item.name}}
                  </option>
                </select>
              </div>
              <div class="reg-form__item">
                <label for="text">Savol sarlavxasi</label>
                <input type="text" v-model="title" id="text">
              </div>
              <div class="reg-form__item">
                <label for="textarea">Savol matni</label>
                <textarea name="" id="textarea" cols="30" rows="10" v-model="text"></textarea>
              </div>
              <div class="reg-form__item">
                <label for="file">File</label>
                <input type="file" @change="addFile" id="file" ref="file"/>
              </div>
              <button type="submit" class="reg-form__btn">Davom etish</button>
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
      categories: [],
      form: '',
      language: "",
      category: [],
      title: "",
      text: "",
    };
  },
  methods: {
    async getCategory() {
      await this.$axios.get("document/category/").then(res => {
        this.categories = res.data;
        console.log('getCategory', res);
      });
    },
    async onSubmit() {
      await this.$axios.post('document/customer/', this.form)
        .then((res) => {
          console.log('onSubmit')
        })
    },
    addFile(e) {
      this.form = new FormData();
      this.form.append('title', this.title);
      this.form.append('language', this.language);
      this.form.append('category', this.category);
      this.form.append('text', this.text);
      this.form.append('question_file', e.target.files[0]);
      this.$refs.file.innerHTML = e.target.files[0].name;
    },
    async postQuestionCustomer() {
      await this.$axios.post('question/customer/', this.form)
        .then((res) => {
          console.log('postQuestionCustomer', res);
        })
    }
},
  mounted() {
    this.getCategory();
  }
};
</script>