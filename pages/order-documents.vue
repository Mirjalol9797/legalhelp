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
          <b-row>
            <b-col lg="4" md="6" v-for="( categoryid,index) of category" :key="index">
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
          </b-row>
          <div class="order-documents-form">
            <form @submit.prevent="onSubmit" class="registration__form">
              <div class="language">
                <label for="language">Til</label>
                <select name="" id="language" v-model="form.lang">
                  <option value="o'zbek">O’zbek</option>
                  <option value="Rus">Rus</option>
                </select>
              </div>
              <div class="category">
                <label for="language">Kategoriya</label>
                <select name="" id="category" v-model="form.category" :disabled="subcategory.length == 0">
                  <option value="" selected disabled
                    >Savol kategoriyasini tanlang</option
                  >
                  <option v-for="(sub,index) of subcategory" :key="index">
                    {{ sub }}
                  </option>
                </select>
              </div>
              <div class="question__title">
                <label for="question__title">Savol sarlavhasi</label>
                <input
                  type="text"
                  id="question__title"
                  placeholder="Qanday hujjat kerak?"
                  v-model="form.title"
                />
              </div>
              <div class="question__text">
                <label for="question__text">Batafsil ma'lumot</label>
                <textarea
                  name=""
                  id="question__text"
                  placeholder="Batafsil ma'lumot" 
                  v-model="form.text"
                ></textarea>
              </div>
              <div class="file">
                <label for="file__input">Fayl</label>
                <input type="file" value="Upload file" class="file__input" />
              </div>
              <div class="registration__button-wrap">
                <b-button class="registration__btn" type="submit">Davom etish</b-button>
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
      checked:'',
      category: [],
      subcategory: [],
      form: {
        lang:'',
        category: "",
        text:'',
        title:'',
      }
    };
  },
  methods: {
    changeCategory() {
      // console.log(this.checked);
      this.subcategory = this.category[this.checked-1].sub_category;
      // console.log(this.subcategory)
    },
    async getCategory() {
      await this.$axios.get("/v1/document/document_type/").then(res => {
        this.category = res.data;
        // this.subcategory= res.data[(this.checked-1)].sub_category
        // this.category.forEach((sub) => {
        //   this.subcategory.push({ id: sub.id, subArr: sub.sub_category  });
        // })
        console.log(res)
        console.log(subcategory);
      });
    },
    async getData(){

    },
    async onSubmit(){
      await this.$axios.post("", {

      })
    }
  },
  mounted() {
    this.getCategory();
  }
};
</script>
