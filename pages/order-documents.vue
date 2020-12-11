<template>
  <div>
    <div class="order-documents-wrapper">
      <b-container>
        <h1 class="order-documets-heading">Hujjat buyurtma qilish</h1>
        <div class="order-documents-inner">
          <div class="order-documents-motto">
            Sizga da’vo ariza yoki shikoyat tayyorlash kerakmi? Shartnoma
            tuzish? Balki o’z korxonangizni tuzish uchun hujjatlar zarurdir?
            Ariza qoldiring va butun mamlakat bo’ylab yuristlar sizga o’z
            takliflaridan ma’qulini tanlang.
          </div>
          <!-- <b-row>
            <b-col lg="4" md="6" v-for="(categoryid, index) of category" :key="index">
              <div class="type-of-documents">
                <label class="type-of-documents-item" :id="categoryid">
                  <div :for="categoryid">
                    <div class="type-of-documents-header">
                      <label>
                        <input type="radio" name="name" v-model="checked"  :value="categoryid.id" @change="changeCategory" />
                        <span class="checkmark"></span>
                        <h6>{{categoryid.category.name}}</h6>
                      </label>
                    </div>
                    <p class="card__text">
                      {{categoryid.category.description}}
                    </p>
                  </div>
                </label>
              </div>
            </b-col>
          </b-row> -->
          <form @submit.prevent="postQuestionCustomer" class="reg-form">
            <div class="reg-form__item">
              <label for="lang">Til</label>
              <select id="lang" v-model="language" required>
                <option>o'zbek</option>
                <option>rus</option>
              </select>
            </div>
            <div class="reg-form__item">
              <label for="select">Categoriya</label>
              <select id="select" v-model="category" required>
                <option
                  v-for="item in categories"
                  :key="item.id"
                  :value="item.id" >
                {{item.name}}
                </option>
              </select>
            </div>
            <div class="reg-form__item">
              <label for="lawyer">Yuristlar</label>
              <select id="lawyer" v-model="lawyer" required>
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
              <label for="text">Savol sarlavxasi</label>
              <input type="text" v-model="title" id="text" required>
            </div>
            <div class="reg-form__item">
              <label for="textarea">Savol matni</label>
              <textarea name="" id="textarea" cols="30" rows="10" v-model="text"></textarea>
            </div>
            <div class="reg-form__item">
              <label for="file">File</label>
              <input type="file" @change="addFile" id="file" ref="file" required />
            </div>
            <button type="submit" class="reg-form__btn">Davom etish</button>
          </form>
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
    addFile(e) {
      this.form = new FormData();
      this.form.append('title', this.title);
      this.form.append('language', this.language);
      this.form.append('category', this.category);
      this.form.append('text', this.text);
      this.form.append('lawyer', this.lawyer);
      this.form.append('doc_file', e.target.files[0]);
      this.$refs.file.innerHTML = e.target.files[0].name;
    },
    async postQuestionCustomer() {
      await this.$axios.post('document/customer/', this.form)
        .then(async (res) => {
          console.log('postQuestionCustomer', res);
          this.language = '';
          this.category = '';
          this.text = '';
          this.lawyer = '';
          this.doc_file = '';
          this.title = '';
          try {
            this.$toast.success({
              title: `Hujjat buyurtma qilindi`,
              message: `Javobini uzingizning saxifangizda kurasiz`,
              
            })
          } catch {
            this.$toast.error({
              title: `Hujjat hato buyurtma qilindi`,
              message: `iltimos qaytadan urinib kuring`,
            })
          }
        })
    }
},
  mounted() {
    this.getCategory();
    this.getLawyers()
  }
};
</script>
