<template>
  <div>
    <div class="registration__wrapper">
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
                  <input
                    v-model="form.first_name"
                    type="text"
                    id="firstname"
                    required
                  />
                </div>
              </div>
              <div class="phone__number">
                <label for="lastname">{{$t('reg.lastname')}}</label>
                <div class="input__tel-wrapper">
                  <input
                    v-model="form.last_name"
                    type="text"
                    id="lastname"
                    required
                  />
                </div>
              </div>
              <div class="phone__number">
                <label for="email">{{$t('reg.email')}}</label>
                <div class="input__tel-wrapper">
                  <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="select">
                <label for="category">{{$t('reg.province')}}</label>
                <select  id="category" v-model="form.region">
                   <option
                    v-for="(selectid, index) of selectuz"
                    :key="index"
                    :value="selectid.id"
                    class="category__region-option"
                    >{{ selectid.title_uz }}</option>
                </select>
              </div>
              <div class="select">
                <label for="category">Huquqiy yo'nalishingiz</label>
                <select  id="category" v-model="form.service">
                   <option
                    v-for="(service, index) of serviceuz"
                    :key="index"
                    :value="service.id"
                    class="category__region-option"
                    >
                      {{ service.title_uz }}
                    </option>
                </select>
              </div>              
              <div class="phone__number">
                <label for="password">{{$t('reg.password')}}</label>
                <div class="input__tel-wrapper">
                  <input
                    v-model="form.password"
                    type="password"
                    id="password"
                    required
                  />
                </div>
              </div>
              <div class="phone__number">
                <label for="password">{{$t('reg.topassword')}}</label>
                <div class="input__tel-wrapper">
                  <input
                    v-model="confirm_password"
                    type="password"
                    id="password"
                    required
                  />
                </div>
              </div>
              <div class="phone__number">
                <label for="phone">{{$t('reg.number')}}</label>
                <div class="input__tel-wrapper">
                  <span class="tel__code">+998</span>
                  <input
                    v-model="form.phone_number"
                    type="tel"
                    id="phone"
                    required
                  />
                </div>
              </div>
              <div class="phone__number addFile">
                <label for="file">Добавить картинку</label>
                <div class="input__tel-wrapper">
                  <input
                    type="file"
                    id="file"
                    required
                    accept="image/*"
                    @change="fileUpload"
                  />
                </div>
              </div>
              <div class="phone__number">
                <label for="file">Добавить картинку</label>
                <textarea
                  name="textearea__for-lawyers"
                  class="textearea__for-lawyers"
                  v-model="form.description"
                  :placeholder="$t('forlawyers.bio')"
                ></textarea>
              </div>
              <div class="password" v-if="showPasswordInput">
                <label for="password__id">
                 {{$t('reg.code')}}
                </label>
                <input
                  type="password"
                  v-model="code"
                  class="password__input"
                  id="password_id"
                  required
                />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        file: "",
        description: "",
        token: ""
      },
      code: ""
    };
  },
  methods: {
    async onSubmit() {
      this.showPasswordInput = true;

      if (this.code == "") {
        await this.$axios.post('user/code/send/', { phone_number:  this.form.phone_number})
                .then(res => {
                    console.log("Code: ", res.data.code)
                })
                .catch(err => console.log(err))

      } else {
        await this.$axios.post('user/code/check/', {phone_number: this.form.phone_number, code: this.code})
                .then(res => {
                    console.log('SendCode', res)
                    this.form.token = res.data.token


                    // User create

                    this.$axios.post("lawyer/create/", this.form)
                    .then(res => {
                      console.log(res)

                      this.form = {
                          first_name: "",
                          last_name: "",
                          phone_number: "",
                          password: "",
                          email: "",
                          region: "",
                          service: "",
                        }

                        this.$router.push(this.localePath('/lawyer_wait'));
                        
                    })
                    .catch(err => {
                      console.log(err)
                    })
                })      
                .catch(err => console.log(err))
      }
    },
    async getRegionuz() {
      await this.$axios.get("region/?language=uz").then(res => {
        this.selectuz = res.data;
        this.selected = res.data;
        console.log(res);
      });
    },
    async getServiceuz() {
      await this.$axios.get("lawyer/services/?language=uz").then(res => {
        this.serviceuz = res.data;
      });
    },
    fileUpload(event) {
      let e = event.target.files[0];
      if (e.type == "image/jpeg") {
        this.form.file = e;
      } else {
        console.log("wrong type");
      }
    },
  },
  mounted() {
    this.getRegionuz();
    this.getServiceuz()
  }
};
</script>
