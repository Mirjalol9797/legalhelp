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
                  :value="item.id" >
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
              <input type="file" @change="addFile" id="file" ref="file" />
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
      file: '',
      form: {
        language: "",
        category: [],
        title: "",
        text: "",
        lawyer: [],
      },
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
      form.append('doc_file', this.file)      
      await this.$axios.post('document/customer/', form)
        .then(async (res) => {
          console.log('postQuestionCustomer', res);
          this.form.language = '';
          this.form.category = '';
          this.form.text = '';
          this.form.lawyer = '';
          this.form.doc_file = '';
          this.form.title = '';
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
          this.$router.push(this.localePath('/customer-profile'))
        })
    }
},
  mounted() {
    this.getCategory();
    this.getLawyers()
  }
};
</script>
