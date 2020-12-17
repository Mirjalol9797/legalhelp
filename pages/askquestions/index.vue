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
                <label for="lang">Til <span>*</span></label>
                <select id="lang" v-model="language" required>
                  <option>o'zbek</option>
                  <option>rus</option>
                </select>
              </div>
              <div class="reg-form__item">
                <label for="select">Categoriya <span>*</span></label>
                <select id="select" v-model="category" required>
                  <option
                    v-for="item in categories"
                    :key="item.id"
                    :value="item.id" 
                  >
                  {{item.name}}
                  </option>
                </select>
              </div>
              <div class="reg-form__item">
                <label for="lawyer">Yuristlar</label>
                <select id="lawyer" v-model="lawyer">
                  <option
                    v-for="item in lawyerListSelect"
                    :key="item.id"
                    :value="item.id" 
                  >
                  {{item.first_name}} {{item.last_name}}
                  </option>
                </select>
              </div>
              <div class="reg-form__item">
                <label for="text">Savol sarlavxasi <span>*</span></label>
                <input type="text" v-model="title" id="text" required>
              </div>
              <div class="reg-form__item">
                <label for="textarea">Savol matni <span>*</span></label>
                <textarea name="" id="textarea" cols="30" rows="10" v-model="text" required></textarea>
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
      lawyer: [],
      lawyerListSelect: []
    };
  },
  methods: {
    async getCategory() {
      await this.$axios.get("document/category/").then(res => {
        this.categories = res.data;
        console.log('getCategory', res);
      });
    },
    async getLawyers() {
      await this.$axios.get('lawyer/list-search/')
        .then((res) => {
          this.lawyerListSelect = res.data;
          console.log('getLawyers', res)
        })
    },
    // async onSubmit() {
    //   await this.$axios.post('document/customer/', this.form)
    //     .then((res) => {
    //       console.log('onSubmit')
    //     })
    // },
    addFile(e) {
      this.form = new FormData();
      this.form.append('title', this.title);
      this.form.append('language', this.language);
      this.form.append('category', this.category);
      this.form.append('text', this.text);
      this.form.append('lawyer', this.lawyer);
      this.form.append('question_file', e.target.files[0]);
      this.$refs.file.innerHTML = e.target.files[0].name;
    },
    async postQuestionCustomer() {
      await this.$axios.post('question/customer/', this.form)
        .then(async (res) => {
          console.log('postQuestionCustomer', res);
          this.language = '';
          this.category = '';
          this.text = '';
          this.lawyer = '';
          this.question_file = '';
          this.title = '';
          try {
            this.$toast.success({
              title: `Savol muvofaqiyatli junatildi`,
              message: `Javobini uzingizning saxifangizda kurasiz`,
              
            })
          } catch {
            this.$toast.error({
              title: `Savol xato junatildi`,
              message: `iltimos qaytadan urinib kuring`,
            })
          }
        })
    }
  },
  created() {
    this.getCategory();
    this.getLawyers()
  }
};
</script>