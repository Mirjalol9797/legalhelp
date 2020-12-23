<template>
  <div>
    <div class="registration__wrapper" v-if="loader">
      <div class="step__two-registration-inner">
        <b-container>
          <div class="step__two-registration">
            <div class="registration__header">
              <nuxt-link :to="localePath('/signin')" class="registration__arrow-link">
                <img src="../assets/images/registration/left-arrow.svg" />

              </nuxt-link>
            </div>
            <div class="text-center">
            <h2>{{$t('reg.title')}}</h2>
            </div>
            <form @submit.prevent="onSubmit" class="registration__form">
              <div class="phone__number">
                <label for="firstname">{{$t('reg.name')}}</label>
                <div class="input__tel-wrapper">
                  <input v-model="form.first_name" type="text" id="firstname" required/>
                </div>
              </div>
              <div class="phone__number">
                <label for="lastname">{{$t('reg.lastname')}}</label>
                <div class="input__tel-wrapper">
                  <input v-model="form.last_name" type="text" id="lastname" required/>
                </div>
              </div>
              <div class="phone__number">
                <label for="email">{{$t('reg.email')}}</label>
                <div class="input__tel-wrapper">
                  <input v-model="form.email" type="email" id="email" required/>
                </div>
              </div>
              <div class="select">
                <label for="region">{{$t('reg.province')}}</label>
                <select  id="region" v-model="form.region">
                   <option v-for="(selectid, index) of selectuz" :key="index"
                    :value="selectid.id"
                    class="category__region-option"
                    >{{ selectid.title_uz }}</option>
                </select>
              </div>
              <div class="select">
                <label for="category">Huquqiy yo'nalishingiz</label>
                <select  id="category" v-model="form.service">
                   <option v-for="(service, index) of serviceuz" :key="index"
                    :value="service.id"
                    class="category__region-option"
                    >{{ service.title_uz }}</option>
                </select>
              </div>
              <div class="phone__number">
                <label for="password">{{$t('reg.password')}}</label>
                <div class="input__tel-wrapper">
                  <input v-model="form.password" type="password" id="password" required/>
                </div>
              </div>
              <b-alert v-if="error2" show variant="danger">
                parol 5 ta raqamdan ko'p bo'lishi kerak
              </b-alert>              
              <div class="phone__number">
                <label for="res_password">{{$t('reg.topassword')}}</label>
                <div class="input__tel-wrapper">
                  <input v-model="confirm_password" type="password" id="res_password" required/>
                </div>
              </div>
              <div class="phone__number">
                <label for="phone">{{$t('reg.number')}}</label>
                <div class="input__tel-wrapper">
                  <span class="tel__code">+998</span>
                  <input v-model="form.phone_number" type="number" id="phone" required/>
                  <div v-if="form.phone_number > 999999999" class="error__number">
                    Noto'g'ri raqam kiritilgan, iltimos to'g'irlab tering
                  </div>
                  
                </div>
              </div>
              <div class="phone__number addFile">
                <label for="file">Rasm yuklang...</label>
                <div class="input__tel-wrapper">
                  <input type="file" id="file" ref="file" accept="image/*" required @change="fileUpload"/>
                </div>
              </div>
              <div class="phone__number">
                <label for="comment">Biografiya kiriting</label>
                <textarea
                  id="comment"
                  name="textearea__for-lawyers"
                  class="textearea__for-lawyers"
                  v-model="form.description"
                  :placeholder="$t('forlawyers.bio')"></textarea>
              </div>
              <b-alert v-if="error" show variant="danger">
                Bu raqam oldin registratsiyadan o'tgan iltimos yangi raqam kirgizing
              </b-alert>
              <div class="password" v-if="showPasswordInput">
                <label for="password__id">
                 {{$t('reg.code')}}
                </label>
                <input v-model="code" id="password__id" type="password" class="password__input" required/>
              </div>
              <div class="registration-submit-wrap">
                <b-button type="submit" class="registration-submit">{{$t('reg.btn')}}</b-button
                >
              </div>
            </form>
          </div>
        </b-container>
      </div>
    </div>
    <div v-else>
      <loading /> 
    </div>     
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: true,
      showPasswordInput: false,
      selectuz: [],
      serviceuz: [],
      confirm_password: "",
      
      form: {
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
        email: "",
        region: "",
        service: "",
        description: "",
        token: "",
        image: "",
      },
      code: "",
      error: '',
      error2: ''
    };
  },
  methods: {
    async onSubmit() {
      this.loader = false;
      if (this.code === "") {
        await this.$axios.post('user/code/send/', { phone_number:  this.form.phone_number})
                .then(res => {
                  // console.log('code send', res)
                  this.showPasswordInput = true;
                  this.error = false;
                  this.loader = true;
                })
                // .catch(err => console.log(err))
                .catch((err) => {
                  // console.log('user/code/', err)               
                  this.error = err.response.data.non_field_errors[0];
                  this.loader = true;
                })
      } else {
        
        await this.$axios.post('user/code/check/', {phone_number: this.form.phone_number, code: this.code})
                .then(res => {
                    // console.log('SendCode', res);
                    this.form.token = res.data.token;
                    // User create
                    var image = new FormData();
                    
                    image.append("image", this.image)
                    // console.log("Image", image)

                    this.$axios.post("lawyer/create/", this.form)
                      .then(res => {
                        // console.log('lawyer/create', res);
                        this.loader = true;
                        this.error2 = false;
                        this.$router.push(this.localePath('/lawyer_wait'));
                      

                      })
                      .catch(err => {
                        console.log(err);
                        this.loader = true;
                        this.error2 = err.response.data.password;
                      })
                })
                .catch(err => console.log(err))
      }
    },
    async getRegionuz() {
      await this.$axios.get("region/?language=uz").then(res => {
        this.selectuz = res.data;
        this.selected = res.data;
        // console.log(res);
      });
    },
    async getServiceuz() {
      await this.$axios.get("lawyer/services/?language=uz").then(res => {
        this.serviceuz = res.data;
      });
    },
    fileUpload(event) {
      let e = event.target.files[0];
       var image = new FormData();
                    
        image.append("image", this.$refs.file.files[0])

        this.$axios.post("lawyer/custom-image/", image)
        .then(res => {
          this.form.image = res.data.image
          // console.log("Image URl", res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getRegionuz();
    this.getServiceuz()
  }
};
</script>
