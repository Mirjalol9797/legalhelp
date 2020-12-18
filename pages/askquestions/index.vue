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
                <select id="lang" v-model="form.language" required>
                  <option>o'zbek</option>
                  <option>rus</option>
                </select>
              </div>
              <div class="reg-form__item">
                <label for="select">Categoriya <span>*</span></label>
                <select id="select" v-model="form.category" required>
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
                <select id="lawyer" v-model="form.lawyer">
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
                <input type="text" v-model="form.title" id="text" required>
              </div>
              <div class="reg-form__item">
                <label for="textarea">Savol matni <span>*</span></label>
                <textarea name="" id="textarea" cols="30" rows="10" v-model="form.text" required></textarea>
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
      form: {
        language: "",
        category: [],
        title: "",
        text: "",
        lawyer: [],
      },
      file: '',
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
    addFile(e) {
      this.file = e.target.files[0]
      this.$refs.file.innerHTML = e.target.files[0].name;
    },
    async postQuestionCustomer() {
      const form = new FormData()
      form.append('title', this.form.title);
      form.append('language', this.form.language);
      form.append('category', this.form.category);
      form.append('text', this.form.text);
      form.append('lawyer', this.form.lawyer);
      form.append('question_file', this.file)
      await this.$axios.post('question/customer/', form)
        .then(async (res) => {
          console.log('postQuestionCustomer', res);
          this.form.language = '';
          this.form.category = '';
          this.form.text = '';
          this.form.lawyer = '';
          this.form.question_file = '';
          this.form.title = '';
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
          this.$router.push(this.localePath('/customer-profile'))
        })
    }
  },
  created() {
    this.getCategory();
    this.getLawyers()
  }
};
</script>