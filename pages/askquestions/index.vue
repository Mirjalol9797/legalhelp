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
                <select name="" id="lang" v-model="form.lang">
                  <option value="uzb">uzb</option>
                  <option value="rus">rus</option>
                </select>
              </div>
              <div class="reg-form__item">
                <label for="select">Categoriya</label>
                <select name="" id="select" v-model="form.category"> 
                  <option 
                    value=""
                    v-for="item in category"
                    :key="item.id"
                  >
                  {{item.name}}
                  </option>
                </select>
              </div>
              <div class="reg-form__item">
                <label for="text">Savol sarlavxasi</label>
                <input type="text" v-model="form.title" id="text">
              </div>             
              <div class="reg-form__item">
                <label for="textarea">Savol matni</label>
                <textarea name="" id="textarea" cols="30" rows="10" v-model="form.text"></textarea>
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
      category: [],
      form: {
        lang: "",
        category: "",
        title: "",
        text: "",
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
      await this.$axios.get("document/category/").then(res => {
        this.category = res.data;
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
      this.form.append('question_file', e.target.files[0]);
      this.$refs.file.innerHTML = e.target.files[0].name;
    },
    async postQuestionCustomer() {
      await this.$axios.post('question/customer/', this.form)
        .then((res) => {
          console.log('postQuestionCustomer', res)
          this.form = {
            lang: "",
            category: "",
            title: "",
            text: "",
            question_file: ''
          }
        })
    } 
},
  mounted() {
    this.getCategory();
  }
};
</script>
