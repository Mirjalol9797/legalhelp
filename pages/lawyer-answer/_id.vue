<template>
  <div>
    <b-container v-if="loader" class="lawyer-question">
      <div class="lawyer-ques">
        <div class="lawyer-ques__title">{{questionLawyerItem.title}}</div>
        <div class="lawyer-ques__desc">{{questionLawyerItem.text}}</div>
        <div class="lawyer-ques__doc" v-if="questionLawyerItem.question_file !== null">
          <a :href="questionLawyerItem.question_file" target="_blank">Hujjatni yuklab olish</a>
        </div>
        <div class="lawyer-ques__categ">
          {{questionLawyerItem.categoriya}}
        </div>
        <div class="lawyer-ques__date">{{questionLawyerItem.date}}</div>
        <div class="lawyer-ques__cust">Mijoz: <span>{{questionLawyerItem.customer}}</span></div>
      </div>
      <div class="lawyer-cost" v-if="questionLawyerItem.status == 'Pending' || questionLawyerItem.status == 'PriceAdded'">
        <b-form 
          class="lawyer-cost__form" 
          @submit.prevent="pathPriceQuestionLawyer(questionLawyerItem.id)"
          :class="{cost__form: costFormActive}"
        >
        <!-- v-if="item.is_paid == false" -->
          <b-form-group
            label="Savolga narx kirgizing"
            label-for="input"
          >
            <b-form-input
              id="input"
              type="text"
              v-model="priceQuestion"
              required
            ></b-form-input>
          </b-form-group> 
          <b-button type="submit" variant="primary">Narx belgilamoq</b-button>                         
          <b-alert 
            class="lawyer-cost__payment"
            show 
            variant="primary"
            v-if="questionLawyerItem.price > 0"
          >
            Siz narx belgiladingiz. Savolga siz belgilagan narx {{questionLawyerItem.price}} <br>
            Agar narxni uzgartirmoqchi bulsangiz iltimos savoga qaytadan narx kirgizing
          </b-alert>                
        </b-form>
        <b-alert :class="{active: isActiveQuestion}" class="lawyer-cost__text" show variant="success">
          Narx quyildi. Iltimos mijoz pull to'lashini kuting. <br>
          Mijoz pull to'laganidan so'ng, mijoz tomondan berilgan savol "Bildirishnomalaringizda" chiqadi          
        </b-alert> 
        <!-- <b-alert :class="{active: isActiveQuestion}" v-if="questionLawyerItem.price > 0" class="lawyer-cost__text" show variant="success">
          Narx uzgartirildi. Iltimos mijoz pull to'lashini kuting. <br>
          Mijoz pull to'laganidan so'ng, mijoz tomondan berilgan savol "Bildirishnomalarda" chiqadi          
        </b-alert>  -->
      </div>
      <!-- v-if="questionLawyerItem.is_paid == false" -->
      <div class="lawyer-ansList" v-if="questionLawyerItem.status == 'PaymentDone' || questionLawyerItem.status == 'QuestionCompleted'">
        <div class="lawyer-ansList__item" v-for="item in answer" :key="item.id">
          <div class="lawyer-ansList__title">Savolga berilgan javob</div>
          <div class="lawyer-ansList__text">
            {{item.text}}
          </div>
          <div class="lawyer-ansList__date">
            {{item.date}}
          </div>
          <div class="lawyer-ansList__file" v-if="item.file !== null">
            <a :href="$store.state.mediaURL + item.file" target="_blank">File yuklab olish</a>
          </div>
          <b-button type="submit" variant="primary" @click="OpenEditForm()">Javobni uzgartirish</b-button>
          <div 
            class="lawyer-ans answer-edit" 
            v-if="questionLawyerItem.status == 'PaymentDone' || questionLawyerItem.status == 'QuestionCompleted'"
            :class="{openEdit: openEditActive}"
          >
            <div class="lawyer-ans__title">Javobni uzgartirish</div>
            <form
              @submit.prevent="patchAnswer(item.id)"
            >
              <div>
                <label for="textarea"></label>
                <textarea name="" id="textarea" v-model="form.text" required></textarea>
              </div>
              <div>
                <label for="file"></label>
                <input type="file" @change="changeFile1" id="file" ref="changefile">
              </div>
              <b-button type="submit" variant="primary">Javob berish</b-button>
            </form>
          </div>            
          <b-alert :class="{active: answerQuestionActive1}"  class="lawyer-ans__info" show variant="success">Javob o'zgartirildi va mijozga yuborildi</b-alert>
        </div>
      </div>
      <div 
        class="lawyer-ans" 
        v-if="questionLawyerItem.status == 'PaymentDone' && answer.length == 0" 

      >
        <div class="lawyer-ans__title">Savolga javob berish</div>
        <form
           @submit.prevent="postAnswer(questionLawyerItem.id)"
        >
          <div>
            <label for="textarea"></label>
            <textarea name="" id="textarea" v-model="form.text"></textarea>
          </div>
          <div>
            <label for="file"></label>
            <input type="file" @change="addFile" id="file" ref="file">
          </div>
          <b-button type="submit" variant="primary">Javob berish</b-button>
        </form>
        <b-alert :class="{active: answerQuestionActive}"  class="lawyer-ans__info" show variant="success">
          Javob mijozga yuborildi. Iltimos saxifani yangilang
        </b-alert>
      </div>
    </b-container>
    <div v-else>
      <loading />
    </div>    
  </div>
</template>
<script>
import Loading from '../../components/Loading.vue';
export default {
  data() {
    return {
      questionLawyerItem: [],
      priceQuestion: '',
      isActiveQuestion: false,
      answerQuestion: '',
      answerQuestionActive: false,
      answerQuestionActive1: false,
      answer: [],
      file: '',
      form: {
        text: '',
      },
      openEditActive: false,
      lawyerAnswerList: false,
      costFormActive: false,
      loader: false,
    }
  },
  methods: {
    async getQuestionLawyer() {
      await this.$axios.get(`question/lawyer/${this.$route.params.id}/`)
        .then((res) => {
          this.loader = true;
          this.questionLawyerItem = res.data;
          // console.log('getQuestionLawyer', res)
        })
    },
    async pathPriceQuestionLawyer(id) {
      await this.$axios.patch(`question/lawyer/${this.$route.params.id}/`, {
        price: this.priceQuestion
      })
        .then((res) => {
          // console.log('pathPriceQuestionLawyer', res);
          this.isActiveQuestion = true;
          this.priceQuestion = "";
          this.costFormActive = true;
        })
    },   
    async lawyerQuestionAnswer() {
      await this.$axios.patch(`question/answer/?question_id=${this.$route.params.id}`, {
        text: this.answerQuestion
      })
        .then((res) => {
          // console.log('lawyerQuestionAnswer', res);
          this.answerQuestion = "";
          this.answerQuestionActive = true
        })
    },
    async getAnswer() {
      await this.$axios.get(`question/answer/?question_id=${this.$route.params.id}`)
        .then((res) => {
          this.answer = res.data;
          // console.log('getAnswer', res)
        })
    },
    addFile(e) {
      this.file = e.target.files[0]
      this.$refs.file.innerHTML = e.target.files[0].name;
    },
    changeFile(e) {
      this.form = new FormData();
      this.form.append('text', this.text);
      this.form.append('file', e.target.files[0]);
      this.$refs.chengefile.innerHTML = e.target.files[0].name;
    },
    changeFile1(e) {
      this.file = e.target.files[0]
      this.$refs.changefile.innerHTML = e.target.files[0].name;
    },
    async postAnswer() {
      const form = new FormData()
      form.append('text', this.form.text)
      form.append('file', this.file)
      await this.$axios.post(`question/answer/?question_id=${this.$route.params.id}`, this.form)
        .then((res) => {
          // console.log('postAnswer', res);
          this.form.text = "";
          this.file = "";
          this.answerQuestionActive = true;
          this.lawyerAnswerList = true;
          this.getAnswer()
        })
    },
    async patchAnswer(id) {
      const form = new FormData()
      form.append('text', this.form.text)
      form.append('file', this.file)
      await this.$axios.patch(`question/answer/${id}/`, form)
        .then((res) => {
          // console.log('patchAnswer', res);
          this.answerQuestionActive1 = true;
          this.form.text = "";
          this.getAnswer();
          this.openEditActive = false;
          try {
            this.$toast.success({
              title: `Javob muvafaqiyatli uzgartirildi`,
              message: ` `
            });
          }
          catch {
            this.$toast.error({
              title: `Javob uzgartirilmadi`,
              message: ``
            });
          }
        })
    },
    OpenEditForm() {
      this.openEditActive = true
    }
  },
  mounted() {
    this.getQuestionLawyer();
    this.getAnswer();
  }
}
</script>